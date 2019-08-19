const React = require('react');
const ReactGA = require('react-ga');
const Safe = require("react-safe");
const Header = require('./header');
const Footer = require('./footer');
const Meta = require('./meta');

const About = ({ isAdmin }) => {
  return (
      <React.Fragment>
        <Header isAdmin={isAdmin} />
        <main className="container">
          <section className="container-common_header">
            <h3 className="container-title">About me</h3>
            <p className="container-text">
              Hello, my name is Vicente and this is my blog. It's built with Node.js, Express and Docker. I write tutorials about programing and artificial intelligence.
              I really enjoy learning these topics and I like helping people so, if you have a doubt or a problem, you can send me a message.
            </p>
            <a className="container-networks" href="https://twitter.com/vincent1bt" target="_blank">
              <img className="container-networks-img" src="/public/blog/images/twitter.png" alt="twitter" />
              <p className="container-networks-text">Twitter</p>
            </a>

            <a className="container-networks" href="https://github.com/vincent1bt" target="_blank">
              <img className="container-networks-img" src="/public/blog/images/github.png" alt="github" />
              <p className="container-networks-text">Github</p>
            </a>

            <h3 className="container-subtitle">Some of my projects</h3>
          </section>

          <section className="container-content">
            <h4 className="container-content-h4">
              Alzheimer's disease Image detection
            </h4>
            <p>
              I made this neuronal network with TensorFlow and the Mobile Net v2 architecture.
            </p>
            <p>
              The images that I used to train this model are from the <strong>ADNI</strong> dataset <strong>(Alzheimer’s Disease Neuroimaging Initiative) </strong>
              <a target="_blank" href="http://adni.loni.usc.edu"> adni.loni.usc.edu</a>. I converted the 3d images from the dataset to 2d jpg images.
            </p>
            <p>
                The model has a <strong>sensitivity and a specificity of 99%. </strong>
                 The code of this project is available <a target="_blank" href="https://nbviewer.jupyter.org/github/vincent1bt/Healthy-notebooks/blob/master/AD.ipynb">as a Jupyter notebook.</a>
            </p>
            <p>
              You can see more information and use the model in <a target="_blank" href="/portfolio/alzheimer">this web page</a>. 
            </p>

            <h4 className="container-content-h4">
              Machine learning in healthcare
            </h4>
            <p>
              These are some projects to show how you can apply machine learning algorithms in healthcare. 
              The main idea is to make these models available to people through web pages or smartphone apps.
            </p>
            <p>
              I have used structured datatasets <strong>(Heart disease, Diabetes) </strong> 
              and images datasets <strong>(Alzheimer's disease, Malaria, Breast cancer)</strong> to build the models.
            </p>
            <p>
              I explain the dataset that I used and some parts of the
              process through posts like in <a target="_blank" href="https://vincentblog.xyz/posts/detecting-alzheimer-s-desease-with-deep-learning">detecting Alzheimer’s desease with deep learning </a>.
            </p>

            <h4 className="container-content-h4">
              Malaria detection iOS App
            </h4>
            <p>
              I made this app for iOS with <strong>TensorFlow Lite</strong>. In this project researchers collected the images
              with a phone's camera attached to a microscope.

              With this app the phone can be attached to a microscope to check a blood film or a blood smear image
              in order to classify the image as parasitized or uninfected.
            </p>
            <p>
              I used the Mobile Net v2 architecture and Keras to train the model.
              The model has a <strong>sensitivity of 95.8% and a specificity of 97%. </strong>
            </p>

            <div className="container-content-gif">
              <img lazyload="true" src="https://res.cloudinary.com/vincent1bt/image/upload/v1553726847/Malaria/malaria.gif" alt="wakemeup Demo"/>
            </div>

            <p>
              In <a target="_blank" href="https://vincentblog.xyz/posts/machine-learning-in-healthcare-part-2">this blog post</a> I explain more about the project.
            </p>
            <p>
              The code of this app is on <a target="_blank" href="https://github.com/vincent1bt/Malaria-detection-iOS-App" target="_blank">Github</a> and
               the code of the model in <a target="_blank" href="https://nbviewer.jupyter.org/github/vincent1bt/Healthy-notebooks/blob/master/Malaria.ipynb" target="_blank">this Jupyter notebook.</a>
            </p>

            <h4 className="container-content-h4">
              Breast cancer detection Flask App
            </h4>
            <p>
              In this case I used <strong>Flask </strong> 
              to create a server that receives an image and loads the Keras model to make a prediction.
            </p>
            <p>
              If the model needs more power you can easily upload this app to Google Cloud with
              better hardware and a GPU.
            </p>
            <p>
              The model has a <strong>sensitivity of 85.6% and a specificity of 86%. </strong>
              The code of the server is on <a target="_blank" href="https://github.com/vincent1bt/Breast-cancer-detection-Flask-App" target="_blank">Github</a> and 
              the code of the model in <a target="_blank" href="https://nbviewer.jupyter.org/github/vincent1bt/Healthy-notebooks/blob/master/breastCancer.ipynb">this Jupyter notebook.</a>
            </p>
            <p>
              You can test the model on Heroku <a target="_blank" href="https://breast-cancer-flask.herokuapp.com/">in this web page</a>
            </p>

            <h4 className="container-content-h4">
              Posts about Machine Learning and Deep Learning
            </h4>
            <p>
              In this blog I have posts that explain concepts about machine learning like <a target="_blank" href="https://vincentblog.xyz/posts/decision-trees-in-python">Decision trees</a> or <a target="_blank" href="https://vincentblog.xyz/posts/logistic-regression-from-scratch-in-python">Logistic regression </a>
              and posts about deep learning like <a target="_blank" href="https://vincentblog.xyz/posts/neural-networks-from-scratch-in-python">Neuronal networks from scratch in python</a>, <a target="_blank" href="https://vincentblog.xyz/posts/backpropagation-and-gradient-descent">Backpropagation and Gradient Descent</a>, <a target="_blank" href="https://vincentblog.xyz/posts/convolutional-neural-networks">Convolutional neural networks</a> and 
              <a target="_blank" href="https://vincentblog.xyz/posts/how-to-deploy-a-keras-model-to-google-cloud"> How to deploy a keras model to Google Cloud</a>. With this I can learn more about the machine learning world
              and share knowledge in the process.
            </p>
            <p>
              My posts are available in English and Spanish, when I started learning about this world I could not find
              good posts in Spanish. Therefore, I made these posts hoping that I can help someone who does not
              speak English.
            </p>
          </section>
        </main>
        <Footer isAdmin={isAdmin} />
     </React.Fragment>
  );
}

module.exports = About;
