import nodemailer from 'nodemailer'

const generateWelcomeMessage = (name, email) => {
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome Email</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
      
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #ffffff;
                  padding: 40px;
                  border-radius: 10px;
                  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
              }
      
              h1 {
                  color: #333333;
              }
      
              p {
                  color: #666666;
                  line-height: 1.5;
              }
      
              ul {
                  color: #666666;
              }
      
              li {
                  margin-bottom: 10px;
              }
      
              .footer {
                  margin-top: 20px;
                  color: #999999;
                  font-size: 12px;
              }
      
              .footer a {
                  color: #999999;
                  text-decoration: none;
              }
      
              .footer a:hover {
                  color: #555555;
              }
          </style>
      </head>
      <body>
      
          <div class="container">
              <h1>Welcome to Indus Action</h1>
              <p>Dear ${name},</p>
              <p>We're absolutely delighted to welcome you to our community! You've successfully signed up and are now part of a vibrant and supportive group.</p>
              <p>Here are your details:</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p>To help you get started, here are a few steps you can take:</p>
              <ul>
                  <li>Complete your profile to make the most of our services.</li>
                  <li>Explore our features to see what we have to offer.</li>
                  <li>Connect with other users and start engaging with the community.</li>
              </ul>
              <p>If you have any questions or need assistance, please don't hesitate to reach out to us. We're here to help you every step of the way.</p>
              <p class="footer">Best regards,<br>The Indus Action Team<br><a href="#">Visit our website</a></p>
          </div>
      
      </body>
      </html>`;
};
const hindi_msg= (name, email) => {
    return `<!DOCTYPE html>
      <html lang="hi">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>स्वागत ईमेल</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
  
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #ffffff;
                  padding: 40px;
                  border-radius: 10px;
                  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
              }
  
              h1 {
                  color: #333333;
              }
  
              p {
                  color: #666666;
                  line-height: 1.5;
              }
  
              ul {
                  color: #666666;
              }
  
              li {
                  margin-bottom: 10px;
              }
  
              .footer {
                  margin-top: 20px;
                  color: #999999;
                  font-size: 12px;
              }
  
              .footer a {
                  color: #999999;
                  text-decoration: none;
              }
  
              .footer a:hover {
                  color: #555555;
              }
          </style>
      </head>
      <body>
  
          <div class="container">
              <h1>Indus Action में आपका स्वागत है</h1>
              <p>प्रिय ${name},</p>
              <p>हम आपको हमारे समुदाय में स्वागत करते हुए अत्यंत प्रसन्न हैं! आपने सफलतापूर्वक साइन अप कर लिया है और अब आप एक जीवंत और सहायक समूह का हिस्सा हैं।</p>
              <p>यहाँ आपकी जानकारी दी गई है:</p>
              <p><strong>नाम:</strong> ${name}</p>
              <p><strong>ईमेल:</strong> ${email}</p>
              <p>शुरू करने में आपकी मदद करने के लिए, यहाँ कुछ कदम हैं जिन्हें आप उठा सकते हैं:</p>
              <ul>
                  <li>अपनी प्रोफ़ाइल को पूरा करें ताकि आप हमारी सेवाओं का अधिकतम लाभ उठा सकें।</li>
                  <li>हमारी सुविधाओं का अन्वेषण करें और देखें कि हमारे पास क्या है।</li>
                  <li>अन्य उपयोगकर्ताओं से जुड़ें और समुदाय के साथ बातचीत करना शुरू करें।</li>
              </ul>
              <p>यदि आपके पास कोई प्रश्न हैं या सहायता की आवश्यकता है, तो कृपया हमसे संपर्क करने में संकोच न करें। हम हर कदम पर आपकी मदद करने के लिए यहाँ हैं।</p>
              <p>हमारे साथ जुड़ने के लिए धन्यवाद। हम आपको बोर्ड पर देखकर उत्साहित हैं और आपकी सफलता की प्रतीक्षा कर रहे हैं!</p>
              <p class="footer">सादर,<br>Indus Action टीम<br><a href="#">हमारी वेबसाइट पर जाएँ</a></p>
          </div>
  
      </body>
      </html>`;
  };
  const tamil_msg=(name, email) => {
    return `<!DOCTYPE html>
      <html lang="ta">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>வரவேற்கும் மின்னஞ்சல்</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
  
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #ffffff;
                  padding: 40px;
                  border-radius: 10px;
                  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
              }
  
              h1 {
                  color: #333333;
              }
  
              p {
                  color: #666666;
                  line-height: 1.5;
              }
  
              ul {
                  color: #666666;
              }
  
              li {
                  margin-bottom: 10px;
              }
  
              .footer {
                  margin-top: 20px;
                  color: #999999;
                  font-size: 12px;
              }
  
              .footer a {
                  color: #999999;
                  text-decoration: none;
              }
  
              .footer a:hover {
                  color: #555555;
              }
          </style>
      </head>
      <body>
  
          <div class="container">
              <h1>Indus Action இல் உங்களை வரவேற்கிறோம்</h1>
              <p>அன்புடையீர் ${name},</p>
              <p>எங்கள் சமூகத்தில் உங்களை வரவேற்கும் போது மிகுந்த மகிழ்ச்சி அடைகிறோம்! நீங்கள் வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள் மற்றும் இனிமையான மற்றும் ஆதரவு குழுவின் பகுதியாகிவிட்டீர்கள்.</p>
              <p>இது உங்கள் விவரங்கள்:</p>
              <p><strong>பெயர்:</strong> ${name}</p>
              <p><strong>மின்னஞ்சல்:</strong> ${email}</p>
              <p>உங்களுக்கு உதவ சில அடையாளக் குறிப்புகள்:</p>
              <ul>
                  <li>எங்கள் சேவைகளில் அதிகபட்சமாக பயனடைய உங்கள் சுயவிவரத்தை பூர்த்தி செய்யுங்கள்.</li>
                  <li>எங்கள் அம்சங்களை ஆராயுங்கள் மற்றும் எங்களுக்கு என்ன என்ன இருக்கிறது என்று பார்க்குங்கள்.</li>
                  <li>பிற பயனர்களுடன் இணைந்து சமூகத்துடன் சேர்ந்து விவாதிக்கத் தொடங்குங்கள்.</li>
              </ul>
              <p>உங்களுக்கு ஏதேனும் கேள்விகள் அல்லது உதவித் தேவைப்பட்டால், தயவுசெய்து எங்களைத் தொடர்பு கொள்ள தயங்க வேண்டாம். நாம் ஒவ்வொரு அடியிலும் உங்களை உதவ இங்கே இருக்கிறோம்.</p>
              <p>எங்களை தேர்ந்தெடுத்ததற்காக நன்றி. உங்களைப் பல்கோடி குழுவில் காண மிகவும் மகிழ்ச்சியாக உள்ளது மற்றும் உங்கள் வளர்ச்சி காத்திருக்கிறோம்!</p>
              <p class="footer">மிகுந்த மரியாதையுடன்,<br>Indus Action குழு<br><a href="#">எங்கள் வலைத்தளத்திற்கு செல்</a></p>
          </div>
  
      </body>
      </html>`;
  };
  

  
  

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user:'hms.nitkkr@gmail.com',
        pass: 'akwl ixln nsnx ynir'
    }
});

const sendWelcomeEmailEnglish = (name, email) => {
    const mailOptions = {
        from: 'hms.nitkkr@gmail.com',
        to: email,
        subject: 'Welcome to Indus Action!',
        html: generateWelcomeMessage(name, email)
    };

    return transporter.sendMail(mailOptions);
};

const sendWelcomeEmailHindi = (name, email) => {
    const mailOptions = {
        from: 'hms.nitkkr@gmail.com',
        to: email,
        subject: 'Welcome to Indus Action!',
        html: hindi_msg(name, email)
    };

    return transporter.sendMail(mailOptions);
};
const sendWelcomeEmailTamil = (name, email) => {
    const mailOptions = {
        from: 'hms.nitkkr@gmail.com',
        to: email,
        subject: 'Welcome to Indus Action!',
        html: tamil_msg(name, email)
    };

    return transporter.sendMail(mailOptions);
};
export  {sendWelcomeEmailEnglish,sendWelcomeEmailHindi,sendWelcomeEmailTamil};