
//career job-requirement


var jobRequirementTableJson;

window.addEventListener('load', function () {
    jobRequirementTableJson = [{ "Job": "developer", "Location": "Chennai", "JobDescription": "AA Urgent Hiring For Data Entry/Computer Operator <br>We are hiring candidates to work on various projects<br> <br>Form Filling <br>Typing Project<br>Content Writing<br>Captcha Filling<br>Number Solving<br>And More<br><br>Join our team now and start earning impressive income from home.", "JobRequirement": "Anyone Can Apply<br>Basic Computer Knowledge<br>Communication Skills<br>Typing Skills<br>Mobile/Laptop Required<br>Any Qualifications Can Apply", "ContantDetails": "Contact person Mr. Ram +1 9887654378" },
    { "Job": "support", "Location": "Pondy", "JobDescription": "BB Urgent Hiring For Data Entry/Computer Operator <br>We are hiring candidates to work on various projects<br> <br>Form Filling <br>Typing Project<br>Content Writing<br>Captcha Filling<br>Number Solving<br>And More<br><br>Join our team now and start earning impressive income from home.", "JobRequirement": "Anyone Can Apply<br>Basic Computer Knowledge<br>Communication Skills<br>Typing Skills<br>Mobile/Laptop Required<br>Any Qualifications Can Apply", "ContantDetails": "Contact person Mr. Ram +1 9887654378" },
    { "Job": "Testing Engineer", "Location": "Cochin", "JobDescription": "CC Urgent Hiring For Data Entry/Computer Operator <br>We are hiring candidates to work on various projects<br> <br>Form Filling <br>Typing Project<br>Content Writing<br>Captcha Filling<br>Number Solving<br>And More<br><br>Join our team now and start earning impressive income from home.", "JobRequirement": "Anyone Can Apply<br>Basic Computer Knowledge<br>Communication Skills<br>Typing Skills<br>Mobile/Laptop Required<br>Any Qualifications Can Apply", "ContantDetails": "Contact person Mr. Ram +1 9887654378" },
    { "Job": "Testing Engineer", "Location": "Mumbai", "JobDescription": "CC Urgent Hiring For Data Entry/Computer Operator <br>We are hiring candidates to work on various projects<br> <br>Form Filling <br>Typing Project<br>Content Writing<br>Captcha Filling<br>Number Solving<br>And More<br><br>Join our team now and start earning impressive income from home.", "JobRequirement": "Anyone Can Apply<br>Basic Computer Knowledge<br>Communication Skills<br>Typing Skills<br>Mobile/Laptop Required<br>Any Qualifications Can Apply", "ContantDetails": "Contact person Mr. Ram +1 9887654378" },
    { "Job": "DotNetDeveloper", "Location": "Mumbai", "JobDescription": "CC Urgent Hiring For Data Entry/Computer Operator <br>We are hiring candidates to work on various projects<br> <br>Form Filling <br>Typing Project<br>Content Writing<br>Captcha Filling<br>Number Solving<br>And More<br><br>Join our team now and start earning impressive income from home.", "JobRequirement": "Anyone Can Apply<br>Basic Computer Knowledge<br>Communication Skills<br>Typing Skills<br>Mobile/Laptop Required<br>Any Qualifications Can Apply", "ContantDetails": "Contact person Mr. Ram +1 9887654378" },
    { "Job": "JavaDeveloper", "Location": "Mumbai", "JobDescription": "CC Urgent Hiring For Data Entry/Computer Operator <br>We are hiring candidates to work on various projects<br> <br>Form Filling <br>Typing Project<br>Content Writing<br>Captcha Filling<br>Number Solving<br>And More<br><br>Join our team now and start earning impressive income from home.", "JobRequirement": "Anyone Can Apply<br>Basic Computer Knowledge<br>Communication Skills<br>Typing Skills<br>Mobile/Laptop Required<br>Any Qualifications Can Apply", "ContantDetails": "Contact person Mr. Ram +1 9887654378" },
    { "Job": "JavaDeveloper", "Location": "Chennai", "JobDescription": "DD Urgent Hiring For Data Entry/Computer Operator <br>We are hiring candidates to work on various projects<br> <br>Form Filling <br>Typing Project<br>Content Writing<br>Captcha Filling<br>Number Solving<br>And More<br><br>Join our team now and start earning impressive income from home.", "JobRequirement": "Anyone Can Apply<br>Basic Computer Knowledge<br>Communication Skills<br>Typing Skills<br>Mobile/Laptop Required<br>Any Qualifications Can Apply", "ContantDetails": "Contact person Mr. Ram +1 9887654378" }];

    createTable(jobRequirementTableJson, "", 1);
});

$(document).on("click", "table tr", function () {

    let jobDetails = this.innerHTML.replaceAll("<td>", "").split("</td>");
    for (var obj in jobRequirementTableJson) {

        if (jobDetails[0] == jobRequirementTableJson[obj].Job && jobDetails[1] == jobRequirementTableJson[obj].Location) {

            $(".job-popup-msg-description").html("<h5>Job Desscription</h5>" + jobRequirementTableJson[obj].JobDescription);
            $(".job-popup-msg-requirement").html("<h5>Job Requirement</h5>" + jobRequirementTableJson[obj].JobRequirement);
            $(".job-popup-msg-contact-details").html("<h5>Contact Details</h5>" + jobRequirementTableJson[obj].ContantDetails);
            $('.job-popup-msg-bg').css('display', 'flex');
            $('.job-popup-msg').css('display', 'flex');

        }

    }
});
$('.job-popup-close-btn').click(function () {
    $('.job-popup-msg-bg').hide();
    $('.job-popup-msg').hide();
});

function createTable(tableData, searchword, page) {

    let pagesize = 5;

    let startItem = (page - 1) * pagesize;

    let table = document.getElementById("table-job-requirement");

    $(".table-page-number").show();



    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    let searchResult = [];

    for (let item in tableData) {

        if (tableData[item].Job.toLowerCase().includes(searchword.toLowerCase()) || tableData[item].Location.toLowerCase().includes(searchword.toLowerCase())) {

            searchResult.push(tableData[item]);
        }
    }

    if (pagesize >= parseInt(searchResult.length)) {
        $(".table-page-number").hide();
    }

    searchResult = searchResult.slice(startItem, startItem + pagesize)



    for (var item in searchResult) {

        let row = table.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = searchResult[item].Job;
        cell2.innerHTML = searchResult[item].Location;
    }
    let row = table.insertRow(0);
    let headerCell = document.createElement("TH");
    headerCell.innerHTML = "Job";
    row.appendChild(headerCell);
    let headerCell1 = document.createElement("TH");
    headerCell1.innerHTML = "Location";
    row.appendChild(headerCell1);
    if (searchResult.length > 0) {
        return true;
    }
    else {
        return false;
    }
}

function searchTable(searchword) {

    createTable(jobRequirementTableJson, searchword, 1)
}

function tablePageLeft(page, searchword) {
    page = parseInt(page);
    if (page == 1) {
        page = 1;
    }
    else {
        page = page - 1;
    }

    createTable(jobRequirementTableJson, searchword, page)
    document.getElementById("page-num").innerText = page;
}

function tablePageRight(page, searchword) {

    page = parseInt(page);
    page += 1;
    var flag;
    flag = createTable(jobRequirementTableJson, searchword, page)

    while (flag == false) {
        page -= 1;
        flag = createTable(jobRequirementTableJson, searchword, page)
    }
    document.getElementById("page-num").innerText = page;
}


//end of career job-requirement