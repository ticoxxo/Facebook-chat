import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { FacebookProvider, CustomChat  } from 'react-facebook';

export default class IndexPage extends Component {
  

render() {
return (
  <FacebookProvider appId="843611769430123" chatSupport>
  <CustomChat pageId="843611769430123" minimized={false}/>
</FacebookProvider>    
 
);
}
  
      
}


