import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stepper,
  Step,
  StepLabel,
  Box,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";
import clsx from "clsx";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import AddToPhotosOutlinedIcon from "@material-ui/icons/AddToPhotosOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import MuiAlert from "@material-ui/lab/Alert";
import {useNavigate}  from "react-router-dom";
import useStyles from "./style";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const initialState = {
  RELATING_TO_PEOPLE: "",
  IMITATION: "",
  EMOTIONAL_RESPONSE: "",
  BODY_USE: "",
  OBJECT_USE: "",
  ADAPTION_TO_CHANGE: "",
  VISUAL_RESPONSE: "",
  LISTENING_SKILLS: "",
  TASTE_SMELL_TOUCH_RESPONSE_AND_USE: [],
  FEAR_OR_NERVOUSNESS: "",
  VERBAL_COMMUNICATION: "",
  ACTIVITY_LEVEL: "",
  LEVEL_AND_CONSISTENCY_OF_INTELLECTUAL_RESPONSE: "",
  GENERAL_IMPRESSIONS: "",
};

const PostAdForm = () => {
  const classes = useStyles();
  const history = useNavigate();
 
    const [carsData,setCarsData] = useState(initialState)
  const handleChange = (e) => {
    setCarsData({ ...carsData, [e.target.name]: e.target.value });
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  
  const handleSubmit = (e) => {
    console.log(carsData)
  };

  function getSteps() {
    return ["Section 1", "Section 2", "Section 3"];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Grow in>
            <Container>
              <Paper className={classes.paper}>
                <Grid item xs={12} sm={12}>
                <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      RELATING_TO_PEOPLE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="RELATING_TO_PEOPLE"
                      name="RELATING_TO_PEOPLE"
                      onChange={handleChange}
                      value={carsData.RELATING_TO_PEOPLE}
                    >
                      <MenuItem value="NO ABNORMALITY">NO ABNORMALITY</MenuItem>
                      <MenuItem value="AVOIDS LOOKING /EXCESS SHY/CLINGY">
                        AVOIDS LOOKING /EXCESS SHY/CLINGY
                      </MenuItem>
                      <MenuItem value="UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE">
                        UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE
                      </MenuItem>
                      <MenuItem value="HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT">
                        HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT
                      </MenuItem>
                    </Select>
                  </FormControl>             
                    </Grid>
                    <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      IMITATION
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="IMITATION"
                      name="IMITATION"
                      onChange={handleChange}
                      value={carsData.IMITATION}
                    >
                      <MenuItem value="NO ABNORMALITY">APPROPRIATE</MenuItem>
                      <MenuItem value="AVOIDS LOOKING /EXCESS SHY/CLINGY">
                        AVOIDS LOOKING /EXCESS SHY/CLINGY
                      </MenuItem>
                      <MenuItem value="UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE">
                        UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE
                      </MenuItem>
                      <MenuItem value="HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT">
                        HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT
                      </MenuItem>
                    </Select>
                  </FormControl>             
                    </Grid>
                    <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      RELATING_TO_PEOPLE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="RELATING_TO_PEOPLE"
                      name="RELATING_TO_PEOPLE"
                      onChange={handleChange}
                      value={carsData.RELATING_TO_PEOPLE}
                    >
                      <MenuItem value="APPROPRIATE">NO ABNORMALITY</MenuItem>
                      <MenuItem value="ONLY SIMPLE BEHAVIOURS LIKE CLAP, NEEDS PROMPT">
                        ONLY SIMPLE BEHAVIOURS LIKE CLAP, NEEDS PROMPT
                      </MenuItem>
                      <MenuItem value="EVEN SIMPLE ONE NEEDS GREAT EFFORTS">
                        EVEN SIMPLE ONE NEEDS GREAT EFFORTS
                      </MenuItem>
                      <MenuItem value="EVEN SIMPLE ONE NEEDS GREAT EFFORTS">
                        EVEN SIMPLE ONE NEEDS GREAT EFFORTS
                      </MenuItem>
                    </Select>
                  </FormControl>             
                    </Grid>
                    <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      EMOTIONAL_RESPONSE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="EMOTIONAL_RESPONSE"
                      name="EMOTIONAL_RESPONSE"
                      onChange={handleChange}
                      value={carsData.EMOTIONAL_RESPONSE}
                    >
                      <MenuItem value="NO ABNORMALITY">AGE-APPROPRIATE SITUATION APPROPRIATE</MenuItem>
                      <MenuItem value="AVOIDS LOOKING /EXCESS SHY/CLINGY">
                        AVOIDS LOOKING /EXCESS SHY/CLINGY
                      </MenuItem>
                      <MenuItem value="UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE">
                        UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE
                      </MenuItem>
                      <MenuItem value="HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT">
                        HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT
                      </MenuItem>
                    </Select>
                  </FormControl>             
                    </Grid>
                    <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      RELATING_TO_PEOPLE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="RELATING_TO_PEOPLE"
                      name="RELATING_TO_PEOPLE"
                      onChange={handleChange}
                      value={carsData.RELATING_TO_PEOPLE}
                    >
                      <MenuItem value="AGE-APPROPRIATE SITUATION APPROPRIATE">NO ABNORMALITY</MenuItem>
                      <MenuItem value="OCCASIONAL INAPPROPRIATE">
                        OCCASIONAL INAPPROPRIATE
                      </MenuItem>
                      <MenuItem value="UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE">
                        UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE
                      </MenuItem>
                      <MenuItem value="HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT">
                        HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT
                      </MenuItem>
                    </Select>
                  </FormControl>             
                    </Grid>
                </Grid>
              </Paper>
            </Container>
          </Grow>
        );

      case 1:
        return (
          <Grow in>
            <Container>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                 <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      RELATING_TO_PEOPLE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="RELATING_TO_PEOPLE"
                      name="RELATING_TO_PEOPLE"
                      onChange={handleChange}
                      value={carsData.RELATING_TO_PEOPLE}
                    >
                      <MenuItem value="NO ABNORMALITY">NO ABNORMALITY</MenuItem>
                      <MenuItem value="AVOIDS LOOKING /EXCESS SHY/CLINGY">
                        AVOIDS LOOKING /EXCESS SHY/CLINGY
                      </MenuItem>
                      <MenuItem value="INAPPRPRIATE, INHIBITED OR EXCESSIVE, MAY GRIMACE , LAUGH OR BECOME RIGID EVEN WITHOUT REASON">
                        INAPPRPRIATE, INHIBITED OR EXCESSIVE, MAY GRIMACE , LAUGH OR BECOME RIGID EVEN WITHOUT REASON
                      </MenuItem>
                      <MenuItem value="HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT">
                        RARELY APPROPRIATE THAT TOO ONLY WHEN MOOD, WILD EMOTIONS EVEN IF NO REASONT
                      </MenuItem>
                    </Select>
                  </FormControl>
                 </Grid>
                 <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      RELATING_TO_PEOPLE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="RELATING_TO_PEOPLE"
                      name="RELATING_TO_PEOPLE"
                      onChange={handleChange}
                      value={carsData.RELATING_TO_PEOPLE}
                    >
                      <MenuItem value="NO ABNORMALITY">NO ABNORMALITY</MenuItem>
                      <MenuItem value="AVOIDS LOOKING /EXCESS SHY/CLINGY">
                        AVOIDS LOOKING /EXCESS SHY/CLINGY
                      </MenuItem>
                      <MenuItem value="UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE">
                        UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE
                      </MenuItem>
                      <MenuItem value="RARELY APPROPRIATE THAT TOO ONLY WHEN MOOD, WILD EMOTIONS EVEN IF NO REASONT">
                        RARELY APPROPRIATE THAT TOO ONLY WHEN MOOD, WILD EMOTIONS EVEN IF NO REASON
                      </MenuItem>
                    </Select>
                  </FormControl>
                 </Grid>
                 <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      RELATING_TO_PEOPLE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="RELATING_TO_PEOPLE"
                      name="RELATING_TO_PEOPLE"
                      onChange={handleChange}
                      value={carsData.RELATING_TO_PEOPLE}
                    >
                      <MenuItem value="NO ABNORMALITY">NO ABNORMALITY</MenuItem>
                      <MenuItem value="AVOIDS LOOKING /EXCESS SHY/CLINGY">
                        AVOIDS LOOKING /EXCESS SHY/CLINGY
                      </MenuItem>
                      <MenuItem value="UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE">
                        UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE
                      </MenuItem>
                      <MenuItem value="HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT">
                        HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT
                      </MenuItem>
                    </Select>
                  </FormControl>
                 </Grid>
                 <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      RELATING_TO_PEOPLE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="RELATING_TO_PEOPLE"
                      name="RELATING_TO_PEOPLE"
                      onChange={handleChange}
                      value={carsData.RELATING_TO_PEOPLE}
                    >
                      <MenuItem value="NO ABNORMALITY">NO ABNORMALITY</MenuItem>
                      <MenuItem value="AVOIDS LOOKING /EXCESS SHY/CLINGY">
                        AVOIDS LOOKING /EXCESS SHY/CLINGY
                      </MenuItem>
                      <MenuItem value="UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE">
                        UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE
                      </MenuItem>
                      <MenuItem value="HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT">
                        HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT
                      </MenuItem>
                    </Select>
                  </FormControl>
                 </Grid>
                 <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      RELATING_TO_PEOPLE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="RELATING_TO_PEOPLE"
                      name="RELATING_TO_PEOPLE"
                      onChange={handleChange}
                      value={carsData.RELATING_TO_PEOPLE}
                    >
                      <MenuItem value="NO ABNORMALITY">NO ABNORMALITY</MenuItem>
                      <MenuItem value="AVOIDS LOOKING /EXCESS SHY/CLINGY">
                        AVOIDS LOOKING /EXCESS SHY/CLINGY
                      </MenuItem>
                      <MenuItem value="UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE">
                        UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE
                      </MenuItem>
                      <MenuItem value="HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT">
                        HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT
                      </MenuItem>
                    </Select>
                  </FormControl>
                 </Grid>

                </Grid>
              </Paper>
            </Container>
          </Grow>
        );
      case 2:
        return (
          <Grow in>
            <Container>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      RELATING_TO_PEOPLE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="RELATING_TO_PEOPLE"
                      name="RELATING_TO_PEOPLE"
                      onChange={handleChange}
                      value={carsData.RELATING_TO_PEOPLE}
                    >
                      <MenuItem value="NO ABNORMALITY">NO ABNORMALITY</MenuItem>
                      <MenuItem value="AVOIDS LOOKING /EXCESS SHY/CLINGY">
                        AVOIDS LOOKING /EXCESS SHY/CLINGY
                      </MenuItem>
                      <MenuItem value="UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE">
                        UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE
                      </MenuItem>
                      <MenuItem value="HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT">
                        HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT
                      </MenuItem>
                    </Select>
                  </FormControl>             
                    </Grid>
                    <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      RELATING_TO_PEOPLE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="RELATING_TO_PEOPLE"
                      name="RELATING_TO_PEOPLE"
                      onChange={handleChange}
                      value={carsData.RELATING_TO_PEOPLE}
                    >
                      <MenuItem value="NO ABNORMALITY">NO ABNORMALITY</MenuItem>
                      <MenuItem value="AVOIDS LOOKING /EXCESS SHY/CLINGY">
                        AVOIDS LOOKING /EXCESS SHY/CLINGY
                      </MenuItem>
                      <MenuItem value="UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE">
                        UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE
                      </MenuItem>
                      <MenuItem value="HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT">
                        HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT
                      </MenuItem>
                    </Select>
                  </FormControl>             
                    </Grid>
                    <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      RELATING_TO_PEOPLE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="RELATING_TO_PEOPLE"
                      name="RELATING_TO_PEOPLE"
                      onChange={handleChange}
                      value={carsData.RELATING_TO_PEOPLE}
                    >
                      <MenuItem value="NO ABNORMALITY">NO ABNORMALITY</MenuItem>
                      <MenuItem value="AVOIDS LOOKING /EXCESS SHY/CLINGY">
                        AVOIDS LOOKING /EXCESS SHY/CLINGY
                      </MenuItem>
                      <MenuItem value="UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE">
                        UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE
                      </MenuItem>
                      <MenuItem value="HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT">
                        HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT
                      </MenuItem>
                    </Select>
                  </FormControl>             
                    </Grid>
                    <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      RELATING_TO_PEOPLE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="RELATING_TO_PEOPLE"
                      name="RELATING_TO_PEOPLE"
                      onChange={handleChange}
                      value={carsData.RELATING_TO_PEOPLE}
                    >
                      <MenuItem value="NO ABNORMALITY">NO ABNORMALITY</MenuItem>
                      <MenuItem value="AVOIDS LOOKING /EXCESS SHY/CLINGY">
                        AVOIDS LOOKING /EXCESS SHY/CLINGY
                      </MenuItem>
                      <MenuItem value="UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE">
                        UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE
                      </MenuItem>
                      <MenuItem value="HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT">
                        HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT
                      </MenuItem>
                    </Select>
                  </FormControl>             
                    </Grid>
                    <Grid item xs={12} sm={6}>
                 <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    fullWidth
                  >
                    <InputLabel id="type-label">
                      RELATING_TO_PEOPLE
                    </InputLabel>
                    <Select
                      labelId="type-label"
                      id="type"
                      label="RELATING_TO_PEOPLE"
                      name="RELATING_TO_PEOPLE"
                      onChange={handleChange}
                      value={carsData.RELATING_TO_PEOPLE}
                    >
                      <MenuItem value="NO ABNORMALITY">NO ABNORMALITY</MenuItem>
                      <MenuItem value="AVOIDS LOOKING /EXCESS SHY/CLINGY">
                        AVOIDS LOOKING /EXCESS SHY/CLINGY
                      </MenuItem>
                      <MenuItem value="UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE">
                        UNAWARE OF ADULT/ ALOOFNESS/FORCEFUL ATTEMPTS NEEDE
                      </MenuItem>
                      <MenuItem value="HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT">
                        HARDLY ANY RESPONSE EVEN TO MOST FORCEFUL ATTEMPT
                      </MenuItem>
                    </Select>
                  </FormControl>             
                    </Grid>
                </Grid>
                <Box align="center">
                  <Button
                    className={classes.buttonSubmit}
                    size="large"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Box>
              </Paper>
            </Container>
          </Grow>
        );
      default:
        return "Unknown stepIndex";
    }
  }

  const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    active: {
      "& $line": {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    completed: {
      "& $line": {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: "#eaeaf0",
      borderRadius: 1,
    },
  })(StepConnector);

  const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: "#ccc",
      zIndex: 1,
      color: "#fff",
      width: 50,
      height: 50,
      display: "flex",
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
    },
    active: {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    },
    completed: {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    },
  });

  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
      1: <LibraryBooksOutlinedIcon />,
      2: <AddToPhotosOutlinedIcon />,
      3: <AssignmentOutlinedIcon />,
    };
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.mainContainer}> 
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grow in>
          <Box align="center" className={classes.box}>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              connector={<ColorlibConnector />}
              style={{ background: "#eae7dc" }}
            >
              {steps.map((label) => {
                return (
                  <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      {label}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Box>
        </Grow>

        <div>
          <Typography>{getStepContent(activeStep)}</Typography>
          <Box align="center">
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backbutton}
            >
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                disabled
                className={classes.nextbutton}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.nextbutton}
              >
                Next
              </Button>
            )}
          </Box>
        </div>
      </form>
    </div>
  );
};

export default PostAdForm;