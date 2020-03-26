import {
  APIGatewayProxyHandler,
} from 'aws-lambda';
import * as AWS from 'aws-sdk';
import db from './models';
import {
  decodeJWT,
} from './utils/jwt';

export const apiGateway = new AWS.ApiGatewayManagementApi({
  endpoint: process.env.SOCKET_URI,
});

export const handler: APIGatewayProxyHandler = async (event) => {
  const context = event.requestContext;
  const connectionId = context.connectionId!;
  const routeKey = context.routeKey as '$connect' | '$disconnect' | '$default';
  try {
    if (routeKey === '$connect') {
      const token = event.queryStringParameters?.token;
      if (!token) {
        return {
          statusCode: 401,
          body: `Unauthorized token: ${token}`,
        };
      }
      const user = decodeJWT(token);
      if (!user?._id) {
        return {
          statusCode: 401,
          body: `Unauthorized token: ${token}`,
        };
      }
      await db.Session.create({
        connectionId, userId: user._id,
      });
    } else if (routeKey === '$disconnect') {
      const session = db.Session.findOne({
        connectionId,
      });
      if (!session) {
        throw new Error('Session not exists!');
      }
      await session.remove();
    } else {
      /*
      const payload = JSON.parse(event.body!);

      switch (payload.type) {
        case 'message': {
          await broadcastMessage(connectionId, payload);
          break;
        }
        default: {
          throw new Error(`Invalid message: ${JSON.stringify(payload)}`);
        }
      }
      */
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: `Malformed event body: ${event.body}`,
    };
  }

  return {
    statusCode: 200,
    body: 'Success',
  };
};
