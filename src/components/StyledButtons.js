import React, { Component } from "react";

//import for Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//imports for Material UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

//import for Semantic UI
import "semantic-ui-css/semantic.min.css";

//import for Antd
import { Button as AntButton } from "antd";
import { Input as AntInput } from "antd";
import { Card as AntCard, Icon as AntIcon, Avatar as AntAvatar } from "antd";
import "antd/dist/antd.css";
const { Meta } = AntCard;

class StyledButtons extends Component {
  constructor() {
    super();
    this.state = {
      styled: ""
    };
  }

  renderSwitch() {
    switch (this.state.styled) {
      case "bootstrap":
        return (
          <div className="login-box">
            <h1>Bootstrap</h1>
            <div>
              <button
                className="btn btn-lg"
                onClick={() => this.setState({ styled: "bootstrap" })}
              >
                BootStrap
              </button>
              <button
                className="btn btn-lg"
                onClick={() => this.setState({ styled: "material-ui" })}
              >
                Material UI
              </button>
              <button
                className="btn btn-lg"
                onClick={() => this.setState({ styled: "semantic" })}
              >
                Semantic
              </button>
              <button
                className="btn btn-lg"
                onClick={() => this.setState({ styled: "antd" })}
              >
                AntD
              </button>
              <button
                className="btn btn-lg"
                onClick={() => this.setState({ styled: "" })}
              >
                Default
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <input
                style={{ width: 200 }}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Username"
              />
              <input
                style={{ width: 200 }}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Password"
              />
            </div>
            <button className="btn btn-secondary btn-lg btn-block">
              Log In
            </button>
            <div class="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src="https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Bootstrap</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      case "material-ui":
        return (
          <div className="login-box">
            <h1>Material-UI</h1>
            <div>
              <Button
                variant="contained"
                onClick={() => this.setState({ styled: "bootstrap" })}
              >
                <p
                  style={{
                    fontFamily: "font-family: Roboto, sans-serif",
                    fontWeight: "bold"
                  }}
                >
                  Bootstrap
                </p>
              </Button>
              <Button
                variant="contained"
                onClick={() => this.setState({ styled: "material-ui" })}
              >
                <p
                  style={{
                    fontFamily: "font-family: Roboto, sans-serif",
                    fontWeight: "bold"
                  }}
                >
                  Material-UI
                </p>
              </Button>
              <Button
                variant="contained"
                onClick={() => this.setState({ styled: "semantic" })}
              >
                <p
                  style={{
                    fontFamily: "font-family: Roboto, sans-serif",
                    fontWeight: "bold"
                  }}
                >
                  Semantic
                </p>
              </Button>
              <Button
                variant="contained"
                onClick={() => this.setState({ styled: "antd" })}
              >
                <p
                  style={{
                    fontFamily: "font-family: Roboto, sans-serif",
                    fontWeight: "bold"
                  }}
                >
                  AntD
                </p>
              </Button>
              <Button
                variant="contained"
                onClick={() => this.setState({ styled: "" })}
              >
                <p
                  style={{
                    fontFamily: "font-family: Roboto, sans-serif",
                    fontWeight: "bold"
                  }}
                >
                  Default
                </p>
              </Button>
            </div>
            <div>
              <TextField
                style={{ padding: 24 }}
                placeholder="Username"
                margin="normal"
              />
              <TextField
                style={{ padding: 24 }}
                placeholder="Password"
                margin="normal"
              />
            </div>
            <Button variant="outlined" fullWidth={true}>
              <p
                style={{
                  fontFamily: "font-family: Roboto, sans-serif",
                  fontWeight: "bold"
                }}
              >
                Log In
              </p>
            </Button>
            <Card style={{ height: 400, width: 300 }}>
              <CardMedia
                style={{ height: 200, width: "100%" }}
                image="https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg"
                title="Dog"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Material UI
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      case "semantic":
        return (
          <div className="login-box">
            <h1>Semantic</h1>
            <div>
              <button
                class="ui button"
                role="button"
                onClick={() => this.setState({ styled: "bootstrap" })}
              >
                Bootstrap
              </button>
              <button
                class="ui button"
                role="button"
                onClick={() => this.setState({ styled: "material-ui" })}
              >
                Material UI
              </button>
              <button
                class="ui button"
                role="button"
                onClick={() => this.setState({ styled: "semantic" })}
              >
                Semantic
              </button>
              <button
                class="ui button"
                role="button"
                onClick={() => this.setState({ styled: "antd" })}
              >
                AntD
              </button>
              <button
                class="ui button"
                role="button"
                onClick={() => this.setState({ styled: "" })}
              >
                Default
              </button>
            </div>
            <div>
              <div class="ui focus input">
                <input type="text" placeholder="Username" />
              </div>
              <div class="ui focus input">
                <input type="text" placeholder="Password" />
              </div>
            </div>
            <button class="fluid ui button">Log In</button>
            <div class="ui card">
              <img
                src="https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg"
                class="ui image"
              />
              <div class="content">
                <div class="header">Semantic</div>
                <div class="meta">
                  <span class="date">Joined in 2015</span>
                </div>
                <div class="description">
                  Matthew is a musician living in Nashville.
                </div>
              </div>
              <div class="extra content">
                <a>
                  <i aria-hidden="true" class="user icon" />
                  22 Friends
                </a>
              </div>
            </div>
          </div>
        );
      case "antd":
        return (
          <div className="login-box">
            <h1>AntD</h1>
            <div>
              <AntButton onClick={() => this.setState({ styled: "bootstrap" })}>
                Bootstrap
              </AntButton>
              <AntButton
                onClick={() => this.setState({ styled: "material-ui" })}
              >
                Material UI
              </AntButton>
              <AntButton onClick={() => this.setState({ styled: "semantic" })}>
                Semantic
              </AntButton>
              <AntButton onClick={() => this.setState({ styled: "antd" })}>
                AntD
              </AntButton>
              <AntButton onClick={() => this.setState({ styled: "default" })}>
                Default
              </AntButton>
            </div>
            <div>
              <AntInput placeholder="Username" />
              <AntInput placeholder="Password" />
            </div>
            <AntButton block>Log In</AntButton>
            <AntCard
              style={{ width: 300 }}
              cover={
                <img
                  alt="dog yo"
                  src="https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg"
                />
              }
              actions={[
                <AntIcon type="setting" />,
                <AntIcon type="edit" />,
                <AntIcon type="ellipsis" />
              ]}
            >
              <Meta
                avatar={
                  <AntAvatar src="https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg" />
                }
                title="Card Title"
                description="This is a good boi"
              />
            </AntCard>
          </div>
        );
      default:
        return (
          <div className="login-box">
            <h1>Default</h1>
            <div>
              <button onClick={() => this.setState({ styled: "bootstrap" })}>
                BootStrap
              </button>
              <button onClick={() => this.setState({ styled: "material-ui" })}>
                Material UI
              </button>
              <button onClick={() => this.setState({ styled: "semantic" })}>
                Semantic
              </button>
              <button onClick={() => this.setState({ styled: "antd" })}>
                AntD
              </button>
              <button onClick={() => this.setState({ styled: "" })}>
                Default
              </button>
            </div>
            <div>
              <input placeholder="Username" />
              <input placeholder="Password" />
            </div>
            <button style={{ width: "100%" }}>Log In</button>
          </div>
        );
    }
  }

  render() {
    return <div>{this.renderSwitch()}</div>;
  }
}

export default StyledButtons;
