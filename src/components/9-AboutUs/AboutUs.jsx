import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../App/App.css';

// This is just explaining what the application is about.

function AboutUs() {
  return (
    <center>
      <br />
      <br />
      <Grid container spacing={3} className="rightTable">
        <Grid item xs={12} className="about">
          Ever shared a moment of your past when suddenly you asked yourself...
          "Was that to correct year?", or "No, that happened the year before.",
          or just simply forgot what happened in that moment. Well for some of
          us as we get older, it begins to happen more often. Some of us decide
          to start journals to help us remember but abandon it soon after. Most
          of the time, having time to sit and organize your thoughts has become
          the challenge. Sure, you can use a medium like "Facebook", add some
          entries about your day, but then you worry about what others have to
          say or even think about how you are living your life... Now you've
          become bitter and stop writing. <br />
          <br />
          Wouldn't it be great to have App where you could revisit those moments
          of your past? You have a few moments to spare, you could open up the
          App, entered in a few sentences, maybe a picture, and be done. What if
          you forgot to enter something that day? You could simply select the
          prior date and drop some information about that day. A few days go by,
          and you remembered something you wanted to add… Just select that date
          you need and make a quick edit. How about you remembered something
          from your childhood, and you don't want to forget about it this time?
          Or what if it's a memory you don't want to remember... just a simple
          delete button.
          <br />
          <br />
          The point of the app is it wouldn't matter when you remembered, you
          could easily access to these memories whenever you wanted.
        </Grid>
      </Grid>
      <br />
    </center>
  );
}

export default AboutUs;
