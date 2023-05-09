import React from "react";
import '../../App.css';
import {Card, Carousel, Button, Row, Col} from 'antd';
import {  Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const Services = () => {
    return (

        
        <div>
         
         
         <Row gutter={1}> 
         <Col span={1}>
        
         </Col>
         
          
        <strong><p style={{fontSize: '2em'}}>Recently accessed courses </p></strong>
           
          <br></br>

        <Row>
          <Col span={12}>
          <p style={{fontSize: '1.2em'}}>
            
          <strong><p style={{ paddingLeft:30}}>1. Self-Makeup</p></strong> <p style={{ paddingLeft:30}}><img src={("../images/p12.jpg")} alt="image here"style={{
                width:550, height: 400, borderRadius: 7,  objectFit:'cover'}}/> </p>
          </p>
          </Col>
          <Col span={12}>
          <p style={{fontSize: '1.2em'}}>
            <br></br>
            <br></br>
            <br></br>
It’s a 1-week Intensive makeup program which is beginner
friendly designed to give you a chance to learn how to do your
own makeup professionally in a very short period of time.
In this class you will learn:
INTRODUCTION
 Makeup tools
Sanitation and Hygiene
Must have items for your kit
 DAY MAKEUP
Skin prep
 Brow shaping
 Eye shadow application
 Foundation application
Lipstick application
-Contouring and Highlighting
- Determining facial bone structure
- Types of highlight
- Layering blush 

-Product Knowledge

We customize personal classes to suit your makeup needs and
importantly your preference

Ksh. 15,000
            </p>
            <Link
         to={'/Signup'}>
 <Button type="primary" htmlType="submit">
          REGISTER
        </Button>
         </Link>
          </Col>

        </Row>
        <br/>

        <Row>
          <Col span={12}>
          <p style={{fontSize: '1.2em'}}>
            
          <strong><p style={{ paddingLeft:30}}>2. Advance Self Makeup Classes</p></strong> <p style={{ paddingLeft:30}}><img src={("../images/p11.jpg")} alt="image here"style={{
                width:550, height: 400, borderRadius: 7, objectFit:'cover'}}/> </p>
          </p>
          </Col>
          <Col span={12}>
          <p style={{fontSize: '1.2em'}}>
            <br></br>
            <br></br>
            <br></br>
            Ksh.20,000/-
This a 2 weeks intensive training that allows you enough time to
learn more than 1 makeup looks and to practice more on everything
learnt on 1 week self-makeup class. By the end of the training you
will be able to do full a face beat on your own.
            </p>
            <Link
         to={'/Signup'}>
 <Button type="primary" htmlType="submit">
          REGISTER
        </Button>
         </Link>
          </Col>

        </Row>
        <br/>

          <Row>
            <Col span={12}>
            <p style={{fontSize: '1.2em'}}>
            <strong><p style={{ paddingLeft:30}}>3. Professional Training</p></strong><p style={{ paddingLeft:30}}><img src={("../images/p10.png")} alt="image here"style={{
                width:550, height: 400, borderRadius: 7, objectFit:'cover'}}/></p>
            </p>
            </Col>
            <Col span={12}>
          <p style={{fontSize: '1.2em'}}>  
          <br></br>
          <br></br>
          <br></br>
          Ksh. 35,000
It’s a 4-week Intensive makeup program which is beginner
friendly designed to give you a chance to learn about the
industry and start working on your basic craft in a very short
period of time.
Want to get into beauty industry and you have no idea where to
start? Professional training is for you!
Class Curriculum
- INTRODUCTION
 Makeup tools
 Makeup Artist Appearance
 Sanitation and Hygiene
 Must have item for your kit
 DAY MAKEUP /NATURAL MAKEUP/NIGHT LOOK
 Skin prep
 Brow shaping
 Eye shadow application
 Foundation application
 Lipstick application
 Building up night look from day look

 BRIDAL MAKEUP
 This covers in details the application and other
consideration when applying bridal make-up

 Contouring and Highlighting
 Determining facial bone structure
 Types of highlight
 Layering blush
 Glamour Make-up

INDUSTRY MARKETING
 Business Marketing
 Business Registration
 Portfolio Building
 Bridal Services
 Social Media Marketing
 Pricing Services
        </p>
        <Link
         to={'/Signup'}>
 <Button type="primary" htmlType="submit">
          REGISTER
        </Button>
         </Link>
          </Col>
        <br/>
          </Row>
         
    
          <Row>
            <Col span={12}>
            <p style={{fontSize: '1.2em'}}>
            <strong><p style={{ paddingLeft:30}}>4. ADVANCED MAKEUP TRAINING</p></strong><p style={{ paddingLeft:30}}><img src={("../images/p8.jpg")} alt="image here"style={{
                width:550, height: 400, borderRadius: 7, objectFit:'cover'}}/></p>
            </p>
            </Col>
            <Col span={12}>
          <p style={{fontSize: '1.2em'}}>  
          <br></br>
          <br></br>
          <br></br>
          KSH.60,000/-
It’s an 8-weeks intensive training that requires a high level of
concentration and dedication in order to ace the skills and
techniques that make you a professional makeup artist. It’s suitable
for beginners and makeup artists who want to perfect their skills
 You will learn advanced professional makeup skills and
techniques.
 The course also focuses on advanced portfolio building and
content creation.
 You will also gain in-depth knowledge on business marketing
and branding.
 You will get plenty of hands-on training through practical
assignments

 You will also learn special effect makeup application

5. You Decide
Your Looks, Time & Dedication
In this class we listen to you. You tell us what you want to learn. You
are in control. Then we customize a class curriculum for you
according to your specification.
        </p>
        <Link
         to={'/Signup'}>
 <Button type="primary" htmlType="submit">
          REGISTER
        </Button>
         </Link>
          </Col>
        <br/>
          </Row>
         
        </Row>

        </div>
    )
}

export default Services;