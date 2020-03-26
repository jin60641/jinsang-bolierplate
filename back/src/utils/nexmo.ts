
import Nexmo, {
// MessageRequestResponseStatusCode,
} from 'nexmo';

type MessageRequestResponseStatusCode = any;

const opts = {
  type: 'unicode',
};

const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY!,
  apiSecret: process.env.NEXMO_API_SECRET!,
});

interface Data {
  to: string;
  text: string;
}

const sendMessage = ({
  to,
  text,
}: Data) => new Promise((resolve) => {
  (nexmo as any).message.sendSms('Tops', to, text, opts, (err: any, resp: any) => {
    if (
      !!err
      || !resp
      || !resp.messages
      || resp.messages[0]?.status !== 0
      // || resp.messages[0]?.status !== MessageRequestResponseStatusCode.Success
    ) {
      return resolve(null);
    }
    return resolve(resp.messages);
  });
});


export default sendMessage;
