//career job-requirement


var jobRequirementTableJson;

window.addEventListener('load', function() {
    jobRequirementTableJson = [{ "Job": "Full stack developer", "Location": "California", "JobDescription": "<br>Develop and implement new software programs<br>Maintain and improve the performance of existing software<br>Clearly and regularly communicate with management and technical support colleagues<br>Design and update software database<br>Test and maintain software products to ensure strong functionality and optimization<br>Recommend improvements to existing software programs as necessary", "JobRequirement": "Anyone Can Apply<br>Bachelor’s Degree in Computer Science required <br>2+ years’ experience in web and software development<br>Demonstrated knowledge of web technologies, such as HTML, CSS and Javascript<br>Ability to work independently and multi-task effectively<br>Demonstrated understanding of projects from the perspective of both client and business<br>Flexible and willing to accept a change in priorities as necessary<br>Strong attention to detail", "ContantDetails": "Contact person Mr. Vasu +1 8052616871" }, { "Job": "Full stack developer", "Location": "California", "JobDescription": "<br>Develop and implement new software programs<br>Maintain and improve the performance of existing software<br>Clearly and regularly communicate with management and technical support colleagues<br>Design and update software database<br>Test and maintain software products to ensure strong functionality and optimization<br>Recommend improvements to existing software programs as necessary", "JobRequirement": "Anyone Can Apply<br>Bachelor’s Degree in Computer Science required <br>2+ years’ experience in web and software development<br>Demonstrated knowledge of web technologies, such as HTML, CSS and Javascript<br>Ability to work independently and multi-task effectively<br>Demonstrated understanding of projects from the perspective of both client and business<br>Flexible and willing to accept a change in priorities as necessary<br>Strong attention to detail", "ContantDetails": "Contact person  Mr. Vasu +1 8052616871" }, { "Job": "Full stack developer", "Location": "California", "JobDescription": "<br>Develop and implement new software programs<br>Maintain and improve the performance of existing software<br>Clearly and regularly communicate with management and technical support colleagues<br>Design and update software database<br>Test and maintain software products to ensure strong functionality and optimization<br>Recommend improvements to existing software programs as necessary", "JobRequirement": "Anyone Can Apply<br>Bachelor’s Degree in Computer Science required <br>2+ years’ experience in web and software development<br>Demonstrated knowledge of web technologies, such as HTML, CSS and Javascript<br>Ability to work independently and multi-task effectively<br>Demonstrated understanding of projects from the perspective of both client and business<br>Flexible and willing to accept a change in priorities as necessary<br>Strong attention to detail", "ContantDetails": "Contact person  Mr. Vasu +1 8052616871" }, { "Job": "Full stack developer", "Location": "California", "JobDescription": "<br>Develop and implement new software programs<br>Maintain and improve the performance of existing software<br>Clearly and regularly communicate with management and technical support colleagues<br>Design and update software database<br>Test and maintain software products to ensure strong functionality and optimization<br>Recommend improvements to existing software programs as necessary", "JobRequirement": "Anyone Can Apply<br>Bachelor’s Degree in Computer Science required <br>2+ years’ experience in web and software development<br>Demonstrated knowledge of web technologies, such as HTML, CSS and Javascript<br>Ability to work independently and multi-task effectively<br>Demonstrated understanding of projects from the perspective of both client and business<br>Flexible and willing to accept a change in priorities as necessary<br>Strong attention to detail", "ContantDetails": "Contact person  Mr. Vasu +1 8052616871" }, { "Job": "DotNetDeveloper", "Location": "California", "JobDescription": "<br>Develop and implement new software programs<br>Maintain and improve the performance of existing software<br>Clearly and regularly communicate with management and technical support colleagues<br>Design and update software database<br>Test and maintain software products to ensure strong functionality and optimization<br>Recommend improvements to existing software programs as necessary", "JobRequirement": "Anyone Can Apply<br>Bachelor’s Degree in Computer Science required <br>2+ years’ experience in web and software development<br>Demonstrated knowledge of web technologies, such as HTML, CSS and Javascript<br>Ability to work independently and multi-task effectively<br>Demonstrated understanding of projects from the perspective of both client and business<br>Flexible and willing to accept a change in priorities as necessary<br>Strong attention to detail", "ContantDetails": "Contact person Mr. Vasu +1 8052616871" }, { "Job": "JavaDeveloper", "Location": "California", "JobDescription": "<br>Develop and implement new software programs<br>Maintain and improve the performance of existing software<br>Clearly and regularly communicate with management and technical support colleagues<br>Design and update software database<br>Test and maintain software products to ensure strong functionality and optimization<br>Recommend improvements to existing software programs as necessary", "JobRequirement": "Anyone Can Apply<br>Bachelor’s Degree in Computer Science required <br>2+ years’ experience in web and software development<br>Demonstrated knowledge of web technologies, such as HTML, CSS and Javascript<br>Ability to work independently and multi-task effectively<br>Demonstrated understanding of projects from the perspective of both client and business<br>Flexible and willing to accept a change in priorities as necessary<br>Strong attention to detail", "ContantDetails": "Contact person  Mr. Vasu +1 8052616871" }, { "Job": "JavaDeveloper", "Location": "California", "JobDescription": "<br>Develop and implement new software programs<br>Maintain and improve the performance of existing software<br>Clearly and regularly communicate with management and technical support colleagues<br>Design and update software database<br>Test and maintain software products to ensure strong functionality and optimization<br>Recommend improvements to existing software programs as necessary", "JobRequirement": "Anyone Can Apply<br>Bachelor’s Degree in Computer Science required <br>2+ years’ experience in web and software development<br>Demonstrated knowledge of web technologies, such as HTML, CSS and Javascript<br>Ability to work independently and multi-task effectively<br>Demonstrated understanding of projects from the perspective of both client and business<br>Flexible and willing to accept a change in priorities as necessary<br>Strong attention to detail", "ContantDetails": "Contact person  Mr. Vasu +1 8052616871" }];

    createTable(jobRequirementTableJson, "", 1);
});

$(document).on("click", "table tr", function() {

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
$('.job-popup-close-btn').click(function() {
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
    } else {
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
    } else {
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