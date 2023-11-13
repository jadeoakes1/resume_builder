console.log("test");

document.getElementById("createResume").addEventListener('click', function(){
    let email = document.getElementById("email").value;
    if (!email) {
        alert("Valid email required");
        return false;
    }
    
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let phone = document.getElementById("phone").value;
    let linkedin = document.getElementById("linkedin").value;
    let portfolio = document.getElementById("portfolio").value;
    let skill1 = document.getElementById("skill1").value;
    let skill2 = document.getElementById("skill2").value;
    let skill3 = document.getElementById("skill3").value;
    let skill4 = document.getElementById("skill4").value;
    let techSkill1 = document.getElementById("techSkill1").value;
    let techSkill2 = document.getElementById("techSkill2").value;
    let techSkill3 = document.getElementById("techSkill3").value;
    let techSkill4 = document.getElementById("techSkill4").value;
    let schoolName = document.getElementById("schoolName").value.toUpperCase();
    let schoolCity = document.getElementById("schoolCity").value;
    let schoolState = document.getElementById("schoolState").value;
    let degree = document.getElementById("degree").value;
    let degreeYear = document.getElementById("degreeYear").value;
    let edDetails = document.getElementById("edDetails").value;
    let company1 = document.getElementById("company1").value.toUpperCase();
    let jobCity1 = document.getElementById("jobCity1").value;
    let jobState1 = document.getElementById("jobState1").value;
    let jobTitle1 = document.getElementById("jobTitle1").value;
    let startDate1 = document.getElementById("startDate1").value;
    let endDate1 = document.getElementById("endDate1").value;
    let jobDetails1 = document.getElementById("jobDetails1").value;
    let company2 = document.getElementById("company2").value.toUpperCase();
    let jobCity2 = document.getElementById("jobCity2").value;
    let jobState2 = document.getElementById("jobState2").value;
    let jobTitle2 = document.getElementById("jobTitle2").value;
    let startDate2 = document.getElementById("startDate2").value;
    let endDate2 = document.getElementById("endDate2").value;
    let jobDetails2 = document.getElementById("jobDetails2").value;
    let company3 = document.getElementById("company3").value.toUpperCase();
    let jobCity3 = document.getElementById("jobCity3").value;
    let jobState3 = document.getElementById("jobState3").value;
    let jobTitle3 = document.getElementById("jobTitle3").value;
    let startDate3 = document.getElementById("startDate3").value;
    let endDate3 = document.getElementById("endDate3").value;
    let jobDetails3 = document.getElementById("jobDetails3").value;
    let references = document.getElementById("references").value;
    
    let resumeHTML = `
    <style>
        body {
            margin: 0px 70px 0px;
            font-family: 'Verdana', sans-serif;
            background: #FFFFFF;
        }
        
        h2 {
            padding-top: 50px;
        }

        p {
            line-height: 25px;
        }

        .skills-list {
            columns: 2;
        }

        .bold {
            font-weight: bold;
        }

        .space {
            margin: 2px;
        }

        hr {
            border: 0;
            height: 2px;
            background-image: linear-gradient(to right, rgba(28, 1, 135, 0.75), rgba(28, 1, 135, 0.5), rgba(0, 0, 0, 0));
        }

    </style>
    
    <div class="resume">
    <br><br>
    <h1 id="name" class="text-center" value>${name}</h1>
    <hr />
    <div class="contact">
        <p class="space">
            <span id="city">${city}</span>,
            <span id="state">${state}</span>
            <span id="zip">${zip}</span>
            <span class="divider">|</span>
            <span id="phone">${phone}</span>
            <span class="divider">|</span>
            <span id="email">${email}</span>
        </p>  
        <p class="space">
            <span id="linkedin">${linkedin}</span>
            <span class="divider">|</span>
            <span id="portfolio">${portfolio}</span>
        </p>
    </div>
    
    <div class="skills">
        <h2>Skills</h2>
        <hr />
        <ul class="skills-list">
            <li id="skill1">${skill1}</li>
            <li id="skill2">${skill2}</li>
            <li id="skill3">${skill3}</li>
            <li id="skill4">${skill4}</li>
        </ul>
    </div>

    <div class="tech-skills">
        <h2>Technical Skills</h2>
        <hr />
        <ul class="skills-list">
            <li id="techSkill1">${techSkill1}</li>
            <li id="techSkill2">${techSkill2}</li>
            <li id="techSkill3">${techSkill3}</li>
            <li id="techSkill4">${techSkill4}</li>
        </ul>
    </div>

    <div class="education">
        <h2>Education</h2>
        <hr />
        <p class="space">
            <span id="school">${schoolName}</span>
            <span class="divider"> ⁠— </span>
            <span id="schoolCity">${schoolCity}</span>,
            <span id="schoolState">${schoolState}</span>
        </p>
        <p class="space">
            <span id="degree" class="bold">${degree}</span>,
            <span id="degreeYear">${degreeYear}</span>
        </p>
        <p id="edDetails">${edDetails}</p>
    </div>

    <div class="experience">
        <h2>Work Experience</h2>
        <hr />
        <p class="space">
            <span id="company1">${company1}</span>
            <span class="divider"> ⁠— </span>
            <span id="jobCity1">${jobCity1}</span>,
            <span id="jobState1">${jobState1}</span>
        </p>
        <p class="space">
            <span id="jobTitle1" class="bold">${jobTitle1}</span>,
            <span id="jobStartDate1">${startDate1}</span> to
            <span id="jobEndDate1">${endDate1}</span>
        </p>
        <p id="jobDetails1">${jobDetails1}</p><br>

        <p class="space">
        <span id="company2">${company2}</span>
        <span class="divider"> ⁠— </span>
        <span id="jobCity2">${jobCity2}</span>,
        <span id="jobState2">${jobState2}</span>
    </p>
    <p class="space">
        <span id="jobTitle2" class="bold">${jobTitle2}</span>,
        <span id="jobStartDate2">${startDate2}</span> to
        <span id="jobEndDate2">${endDate2}</span>
    </p>
    <p id="jobDetails2">${jobDetails2}</p><br>

    <p class="space">
    <span id="company3">${company3}</span>
    <span class="divider"> ⁠— </span>
    <span id="jobCity3">${jobCity3}</span>,
    <span id="jobState3">${jobState3}</span>
    </p>
    <p class="space">
        <span id="jobTitle3" class="bold">${jobTitle3}</span>,
        <span id="jobStartDate3">${startDate3}</span> to
        <span id="jobEndDate3">${endDate3}</span>
    </p>
    <p id="jobDetails3">${jobDetails3}</p><br>
        </div>

        <div class="references">
            <h2>References</h2>
            <hr />
            <p id="references">${references}</p>
        </div>
    </div>
    `;

    flyWindow = window.open('about:blank','myPop','width=800,height=800,left=200,top=200');
    flyWindow.document.write(resumeHTML);
});