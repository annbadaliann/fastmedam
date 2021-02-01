import { Container } from "@material-ui/core";
import React, { useState } from "react";

import noPic from "../../../assets/images/no-photo.png";
import useStyles from "../Account.style";

import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import useGlobal from "../../../platform/store";

const About = () => {
  const classes = useStyles();

  const [{ userDetails }] = useGlobal();

  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fileSelectHandler = (e) => {
    const file = e.target.files[0];

    const imageToPreview = URL.createObjectURL(file);

    setSelectedFile(file);
    setImagePreview(imageToPreview);
  };

  const fileUploadHandler = () => {
    setIsLoading(true);
    const formData = new FormData();
    // formData.append("image", selectedFile);
    // fetch(`${config.host}/announcements/${userId}/image`, {
    //   method: "PUT",
    //   body: formData,
    //   headers: {
    //     Authorization: `Basic ${base64.encode("for front:for front pass")}`,
    //   },
    // })
    //   .then((resp) => {
    //     return resp.json();
    //   })
    //   .then((data) => {
    //     if (data) {
    //       setIsLoading(false);
    //     }
    //   });
  };

  return (
    <div className={classes.about}>
      <Container>
        <div className={classes.content}>
          <div className={classes.profpic}>
            <img src={imagePreview ? imagePreview : noPic} alt="no picture" />

            <div className={classes.uploadImg}>
              <input
                accept="image/*"
                className="upload-input"
                id="contained-button-file"
                multiple
                type="file"
                onChange={fileSelectHandler}
              />
              <label htmlFor="contained-button-file">
                <AddPhotoAlternateIcon />
              </label>
            </div>
          </div>

          {userDetails && (
            <div className={classes.info}>
              <h2>
                {userDetails?.firstName} {userDetails?.lastName}
              </h2>
              <p>{userDetails?.email}</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default About;
