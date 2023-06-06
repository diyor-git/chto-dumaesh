import React from "react";
import TelegramLoginButton from "telegram-login-button";

const TelegramButton = (props: any) => {
  return (
    <TelegramLoginButton
      dataOnauth={props.handleTelegramResponse}
      botName="chto_dumaesh_bot"
      usePic={false}
    />
  );
};

export default TelegramButton;
