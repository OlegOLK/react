import React, { addCallback } from 'reactn'; // <-- reactn
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        width: '90%',
        backgroundColor: 'aliceblue'
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});


function getSteps() {
    return ['Select conditions for your rule', 'Create actions', 'Configure rule'];
}

class JCreateRule extends React.Component {
    state = {
        activeStep: 0,
      };

      isDisabled = false;   

      constructor(props){
          super(props);
          const ruleCreationFromGlobal  = this.global.ruleCreation;
           
            
          this.state = {
            activeStep: 0,
            ruleCreation: {
                isAnyActiveCondition: ruleCreationFromGlobal.isAnyActiveCondition,
                isAnyActiveAction: ruleCreationFromGlobal.isAnyActiveAction,
                isRuleCompleted: ruleCreationFromGlobal.isRuleCompleted
            }
          }

          addCallback(global=>{
            this.setState({
                ruleCreation: {
                    isAnyActiveCondition: global.ruleCreation.isAnyActiveCondition,
                    isAnyActiveAction: global.ruleCreation.isAnyActiveAction,
                    isRuleCompleted: global.ruleCreation.isRuleCompleted
                }
            });

            return null;
          });
      }

      handleNext = () => {
        this.setState(prevState => ({
          activeStep: prevState.activeStep + 1,
        }));
      };

      handleBack = () => {
        this.setState(prevState => ({
          activeStep: prevState.activeStep - 1,
        }));
      };

      handleStepChange = activeStep => {
        this.setState({ activeStep });
      };

      handleReset = () => {
        this.setState({
          activeStep: 0,
        });
      };

      getDisabledState(ruleCreation){
        if(this.state.activeStep === 0 && !ruleCreation.isAnyActiveCondition){return true;}
        if(this.state.activeStep === 1 && !ruleCreation.isAnyActiveAction){return true;}
        if(this.state.activeStep === 1 && !ruleCreation.isRuleCompleted){return true;}
        return false;
      }

      render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        return (
          <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={ this.getDisabledState(this.state.ruleCreation) }
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>

            <Divider variant="middle" />
          </div>
        );
      }
    }


JCreateRule.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(JCreateRule);