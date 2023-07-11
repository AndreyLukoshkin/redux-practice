import React, { useCallback, useEffect, useMemo, useState } from "react";

import Button from "../Button";
import FormTextArea from "../FormTextArea";
import Input from "../Input";
import UserCounter from "../UserCounter";
import "./styles.css";

const requiredText = "field must be filled!";

const validateText = (text, cb) => {
  if (!text) {
    cb(requiredText);
    return true;
  }

  if (text < 3) {
    cb("Too short text");
    return true;
  }
  if (/\s/g.test(text)) {
    cb("there should be no spaces");
    return true;
  }
  return false;
};

const validateUrl = (text, cb) => {
  if (!text) {
    cb(requiredText);
    return true;
  }

  if (
    !/^(ftp|http|https):\/\/([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(:[0-9]+)?(\/[^\s]*)?$/.test(
      text
    )
  ) {
    cb("Not valid url");
    return true;
  }

  return false;
};

const UserBio = ({
  avatarUrl,
  nickname,
  subscribed,
  subscribers,
  firstName,
  lastName,
  description,
  url,
  isMyPage,
  isSubscribed,
  onEdit,
  formLoading,
}) => {
  const [btnProps, setBtnProps] = useState({
    onClick: () => false,
    children: "Subscribe",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [formUserName, setFormUserName] = useState(nickname);
  const [formFirstName, setFormFirstName] = useState(firstName);
  const [formLastName, setFormLastName] = useState(lastName);
  const [formDescription, setFormDescription] = useState(description);
  const [formUrl, setFormUrl] = useState(url);
  const [userNameError, setUserNameError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [urlError, setUrlError] = useState("");

  const onSaveEditForm = useCallback(async () => {
    const isUserNameError = validateText(formUserName, setUserNameError);
    const isFirstNameError = validateText(formFirstName, setFirstNameError);
    const isLastNameError = validateText(formLastName, setLastNameError);
    const isUrlError = validateUrl(formUrl, setUrlError);

    let isError =
      isUserNameError || isFirstNameError || isLastNameError || isUrlError;

    if (isError) {
      return;
    }

    if (!formDescription) {
      isError = true;
      setDescriptionError(requiredText);
    }

    await onEdit({
      firstName: formFirstName,
      lastName: formLastName,
      nickname: formUserName,
      description: formDescription,
      url: formUrl,
    });
    setIsEditMode(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formUserName, formFirstName, formLastName, formUrl, formDescription]);

  useEffect(() => {
    if (isMyPage) {
      if (isEditMode) {
        setBtnProps({
          onClick: onSaveEditForm,
          children: "Save",
          className: "cnUserEditButton",
          disabled: formLoading,
        });
      } else {
        setBtnProps({
          onClick: () => setIsEditMode(true),
          children: "Edit",
        });
      }
    } else if (isSubscribed) {
      setBtnProps({ onClick: () => false, children: "Unsubscribe" });
    } else {
      setBtnProps({ onClick: () => false, children: "Subscribe" });
    }
  }, [isMyPage, isSubscribed, isEditMode, onSaveEditForm, formLoading]);

  const fields = useMemo(() => {
    if (isEditMode) {
      return {
        userName: (
          <Input
            value={formUserName}
            onChange={({ target: { value } }) => setFormUserName(value)}
            errorText={userNameError}
            className="cnInput"
          />
        ),
        name: (
          <>
            <Input
              value={formFirstName}
              onChange={({ target: { value } }) => setFormFirstName(value)}
              errorText={firstNameError}
              className="cnInput"
            />
            <Input
              value={formLastName}
              onChange={({ target: { value } }) => setFormLastName(value)}
              errorText={lastNameError}
              className="cnInput"
            />
          </>
        ),
        description: (
          <FormTextArea
            value={formDescription}
            onChange={({ target: { value } }) => setFormDescription(value)}
            className="cnInput"
            errorText={descriptionError}
          />
        ),
        url: (
          <Input
            value={formUrl}
            onChange={({ target: { value } }) => setFormUrl(value)}
            errorText={urlError}
          />
        ),
        firstButtonClassName: "cnUserBioButtonRow",
      };
    }
    return {
      userName: <span className="cnUserBioNickname">{nickname}</span>,
      name: (
        <span className="cnUserBioName">
          {firstName} {lastName}
        </span>
      ),
      description: <span>{description}</span>,
      url: <a href={url}>{url}</a>,
      firstButtonClassName: "cnUserBioRow",
    };
  }, [
    isEditMode,
    nickname,
    firstName,
    lastName,
    description,
    url,
    formFirstName,
    formLastName,
    formDescription,
    formUrl,
    formUserName,
    userNameError,
    firstNameError,
    lastNameError,
    urlError,
    descriptionError,
  ]);

  return (
    <div className="cnUserBioRoot">
      <div>
        <img className="cnUserBioAvatar" src={avatarUrl} alt="avatar" />
      </div>
      <div className="cnUserBioInfo">
        <div className={fields.firstButtonClassName}>
          {fields.userName}
          <Button {...btnProps} />
        </div>
        <div className="cnUserBioRow">
          <UserCounter count={5} text="Posts" className="cnUserBioCounter" />
          <UserCounter
            count={subscribed}
            text="Followers"
            className="cnUserBioCounter"
          />
          <UserCounter
            count={subscribers}
            text="Subscribes"
            className="cnUserBioCounter"
          />
        </div>
        <div className="cnUserBioRow">{fields.name}</div>
        <div className="cnUserBioRow">{fields.description}</div>
        {fields.url}
      </div>
    </div>
  );
};

export default UserBio;
