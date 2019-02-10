/**
 *
 * home page
 *
 * This component is the home page not found page.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import _ from 'lodash';

// UI Framework
import {
  Classes,
  Alignment,
  Button,
  Alert,
  Icon,
  Card,
  Intent,
  FormGroup,
  InputGroup,
  Checkbox,
  FileInput,
  Label,
  Switch,
  Dialog,
  Tooltip,
  Position,
  Navbar,
  Divider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';

import { Grid, Button as SemanticButton } from 'semantic-ui-react';

import { appIcon, logoAbout, docIcon } from '../../asserts';

// Style
import Styles from './style';

// Class Home, basic component for application
class AddNewProject extends Component {
  state = {
    dialogOpen: false,
    showS1: true,
  };
  selectedProject = 'oslcBlankProject';
  selectedProjectDesc =
    '普通OSLC Adapter适配器空白项目，项目初始化包含一个Root Service，在项目创建过程中可添加其他Service以及Provider，并在项目中定义Resource。';

  /**
   *
   * 临时设置，需要被action替代
   */
  showS1 = true;

  /**
   * constructor function
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this._renderCreateWizardStep1 = this._renderCreateWizardStep1.bind(this);
    this._renderCreateWizardStep2 = this._renderCreateWizardStep2.bind(this);
  }

  componentDidMount() {
    this.setState({ dialogOpen: this.props.isOpen });
  }

  componentWillReceiveProps() {
    const { isOpen } = this.props;
    this.setState({ dialogOpen: isOpen });
  }

  _renderCreateWizardStep1 = () => {
    return (
      <Card elevation={0} interactive={false} style={Styles.mainSectionContent}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4} style={Styles.mainSectionSideBar}>
              <p style={Styles.mainSectionSideBarMenuTitle}>OSLC适配器</p>

              <p style={Styles.mainSectionSideBarMenu}>
                <Button
                  style={Styles.mainSectionSideBarMenuButton}
                  fill={true}
                  alignText={Alignment.LEFT}
                  minimal={true}
                  icon=""
                  text="普通项目"
                  active={true}
                />
              </p>

              <p style={Styles.mainSectionSideBarMenu}>
                <Button
                  disabled={true}
                  style={Styles.mainSectionSideBarMenuButton}
                  fill={true}
                  alignText={Alignment.LEFT}
                  minimal={true}
                  icon=""
                  text="在线模板"
                />
              </p>

              <p style={Styles.mainSectionSideBarMenuTitle}>其他</p>
              <p style={Styles.mainSectionSideBarMenu}>
                <Button
                  disabled={true}
                  style={Styles.mainSectionSideBarMenuButton}
                  fill={true}
                  alignText={Alignment.LEFT}
                  minimal={true}
                  icon=""
                  text="空白项目"
                />
              </p>
            </Grid.Column>

            <Grid.Column width={12} style={Styles.mainSectionWorkArea}>
              <Grid>
                <Grid.Row style={Styles.workAreaMainS1}>
                  <Grid.Column width={16}>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={4}>
                          <div
                            style={_.assign(
                              {},
                              Styles.projectContainer,
                              Styles.projectContainerSelected
                            )}
                            onClick={() => {
                              this._handleClickProject();
                            }}
                          >
                            <img src={docIcon} style={Styles.docIcon} />
                            <p style={Styles.projectTitle}>
                              OSLC Adapter空项目
                            </p>
                          </div>
                        </Grid.Column>
                        <Grid.Column width={4} />
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={Styles.workAreaDescS1}>
                  <Grid.Column width={16}>
                    <p style={Styles.projectDesc}>{this.selectedProjectDesc}</p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={Styles.workAreaActionS1}>
                  <Grid.Column
                    width={16}
                    style={Styles.createNewProjectButtonContainer}
                  >
                    <Tooltip content={this.selectedProjectDesc}>
                      <Button
                        large={true}
                        rightIcon="arrow-right"
                        intent={Intent.PRIMARY}
                        onClick={() => {
                          this.setState({ showS1: false });
                        }}
                      >
                        下一步
                      </Button>
                    </Tooltip>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    );
  };

  _renderCreateWizardStep2 = () => {
    return (
      <Card elevation={0} interactive={false} style={Styles.mainSectionContent}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16} style={Styles.mainSectionWorkArea}>
              <Grid>
                <Grid.Row style={Styles.workAreaMainS2}>
                  <Grid.Column width={16}>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={16}>
                          <p style={Styles.workAreaTitle}>创建一个新的项目</p>
                          <p style={Styles.workAreaTitleDesc}>
                            在workspace或者在指定的路径下面创建一个新的OSLC适配器空项目.
                          </p>
                          <Divider />
                          <br />
                          <div style={Styles.workAreaForm}>
                            <FormGroup
                              helperText="Service ID"
                              label="Service ID"
                              labelFor="text-input"
                              labelInfo="(*必须)"
                            >
                              <InputGroup
                                disabled={true}
                                id="text-input"
                                value="a46ad70f-cca5-49ad-9299-ad19672845e8"
                              />
                            </FormGroup>
                            <FormGroup
                              helperText="Service名称."
                              label="Service名称"
                              labelFor="text-input"
                              labelInfo="(*必须)"
                            >
                              <InputGroup
                                id="text-input"
                                placeholder="Service1"
                              />
                            </FormGroup>
                            <Checkbox checked={true}>使用默认路径</Checkbox>
                            <FormGroup
                              disabled={true}
                              helperText="将使用此路径创建新项目"
                              label="路径:"
                              inline={true}
                            >
                              <FileInput
                                style={Styles.workAreaFormComponent}
                                disabled={true}
                                text="选择路径..."
                                fill={true}
                              />
                            </FormGroup>
                            <Divider />
                          </div>
                        </Grid.Column>

                        <Grid.Column width={16}>
                          <div style={Styles.workAreaForm}>
                            <p style={Styles.workAreaFormProperties}>
                              项目属性:
                            </p>
                          </div>
                        </Grid.Column>

                        <Grid.Column width={8}>
                          <div style={Styles.workAreaForm}>
                            <Checkbox checked={false}>
                              使用根节点Root Service
                            </Checkbox>
                          </div>
                        </Grid.Column>

                        <Grid.Column width={8}>
                          <div style={Styles.workAreaForm}>
                            <FormGroup
                              disabled={false}
                              helperText={'对其他设置的说明文字...'}
                              inline={true}
                              intent={Intent.SUCCESS}
                              label={'其他设置'}
                              labelFor="text-input"
                              labelInfo={'(必须)'}
                            >
                              <Switch
                                id="text-input"
                                label="设置1"
                                disabled={false}
                              />
                              <Switch
                                id="text-input"
                                label="设置2"
                                disabled={false}
                              />
                            </FormGroup>
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row style={Styles.workAreaActionS2}>
                  <Grid.Column
                    width={16}
                    style={Styles.createNewProjectButtonContainer}
                  >
                    <Button
                      style={Styles.actionButton}
                      large={true}
                      icon="arrow-left"
                      intent={Intent.PRIMARY}
                      onClick={() => {
                        this.setState({ showS1: true });
                      }}
                    >
                      上一步
                    </Button>

                    <Button
                      style={Styles.actionButton}
                      large={true}
                      rightIcon="confirm"
                      intent={Intent.PRIMARY}
                      onClick={() => {
                        this.setState({ dialogOpen: false, showS1: true });
                      }}
                    >
                      确定
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    );
  };

  render() {
    const { navTo } = this.props;
    return (
      <Dialog
        icon="cube-add"
        title="创建..."
        onClose={() => {
          this.setState({ dialogOpen: false, showS1: true });
        }}
        autoFocus={true}
        canEscapeKeyClose={false}
        canOutsideClickClose={false}
        enforceFocus={true}
        isOpen={this.state.dialogOpen}
        usePortal={true}
        style={Styles.createNewProjectDialog}
      >
        <div
          className={Classes.DIALOG_BODY}
          style={Styles.mainSectionContentContainer}
        >
          {this.state.showS1 ? this._renderCreateWizardStep1() : null}
          {!this.state.showS1 ? this._renderCreateWizardStep2() : null}
        </div>
      </Dialog>
    );
  }
}

// Default props
AddNewProject.defaultProps = {};

// Prop attributes types
AddNewProject.propTypes = {};

/**
 * mapStateToProps is a function provided to pull data from the store when it changes,
 * and pass those values as props to your component.
 *
 * @param {*} state
 */
const mapStateToProps = state => ({});

/**
 * mapDispatchToProps is a function provided to make use of the store's dispatch function,
 * usually by creating pre-bound versions of action creators that will automatically
 * dispatch their actions as soon as they are called.
 *
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({
  navTo: location => dispatch(push(location)),
});

// Export Home container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(AddNewProject);
