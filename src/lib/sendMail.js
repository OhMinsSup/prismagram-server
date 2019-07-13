import nodemailer from 'nodemailer';

const sendMail = email => {
  const client = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  });
  return client.sendMail(email);
};

export const sendSecretMail = (adress, secret) => {
  const email = {
    from: 'mins5190@gmail.com',
    to: adress,
    subject: '🔒Login Secret for Prismagram🔒',
    html: `
    <div style="max-width: 100%; width: 400px; margin: 0 auto; padding: 1rem; text-align: justify; background: #f8f9fa; border: 1px solid #dee2e6; box-sizing: border-box; border-radius: 4px; color: #868e96; margin-top: 0.5rem; box-sizing: border-box;">
      <b>안녕하세요! </b>회원인증을 계속하시려면 하단의 키를 복사하세요. 만약에 실수로 요청하셨거나, 본인이 요청하지 않았다면, 이 메일을 무시하세요.
    </div>
    <div style="text-align: center; margin-top: 1rem; color: #868e96; font-size: 0.85rem;"><div>${secret}</a></div><br/><div>이 키는 24시간동안 유효합니다. </div></div>`
  };
  return sendMail(email);
};
