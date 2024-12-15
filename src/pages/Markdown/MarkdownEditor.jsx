import React, { useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';
import './editor.css';

const mdParser = new MarkdownIt(/* Markdown-it options */);


function MarkdownEditor() {
    const [resume, setResume] = useState(`## Yogesh Vasant kadu
[kaduyogesh99@gmail.com](mailto:kaduyogesh99@gmail.com) | +91 9881309690 | [GitHub/YogeshKadu](https://github.com/YogeshKadu/)

I'm a computer science engineer and software developer, seeking to improve my web development skills. Having hands-on experience on different front end and CSS frameworks including Angular, React JS, Tailwind.

---

### WORK EXPERIENCE
**Senior Software Engineer at Capgemini**

09/2021 - Ongoing, Pune
Achievements/Tasks

* Developed a news sentiment analysis dashboard using ReactJS.
* Developed and seamlessly integrated a fully functional chatbot powered by OpenAI for startups.
* Implemented intuitive user interface designs to enhance customer experience and facilitate smooth navigation.
* Integrated secure payment gateways to ensure safe transactions for users.

**Web Developer at Ekatta Innovators LLP**

06/2020 - 06/2021, Chh. Sambhaji nagar
Web Development / Native Application Development

* Build Ticket Booking application for ferry service. [Native Application with payment Gateway integration]
* Build smart citizen application for Aurangabad city which include google API, broadcast news, live weather forecasting.
* Build responsive UI for chat applications using Angular, Bootstrap.
* Migrated angular 8 application to angular 10 LTS.
`);

    function handleEditorChange({ html, text }) {
        console.log('handleEditorChange', html, text);
        setResume(text);
    }
    return (
        <div className="relative flex flex-col flex-1 max-w-full font-sans">
            <MdEditor view={{ menu: false, md: false, html: true }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} value={resume} />
        </div>
    )
}

export default MarkdownEditor