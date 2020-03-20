import React, { Component } from "react";
import axios from "axios";

import ArticlePreview from "./articlePreview";

const styler = {
  color: "black",
  contentAlign: "center",
  padding: "20px",
  marginLeft: "150px",
  marginRight: "150px"
};

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1/sites/ravensrestoration.wordpress.com/posts"
      )
      .then(res => {
        console.log(res.data.posts);
        this.setState({ posts: res.data.posts });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="blog" style={styler}>
        <center>
          <div className="anchor" id="blog" />
          <u>
            <h1 className="sectionTitle">Articles</h1>
          </u>
          {this.state.posts.map(post => (
            <ArticlePreview post={post} />
          ))}
          ))}
        </center>
      </div>
    );
  }
}
