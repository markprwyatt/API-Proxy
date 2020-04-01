
const getPages = () => {
   
    const url = `/getAllPages`;
    const response = await fetch(url);
    const json = await response.json();
};
const searchObject = {}
getPages();

	//Promise.all(data.result.map(x => {
		//const getPageByIdUrl =  `https://114-oua-973.mktorest.com/rest/asset/v1/landingPage/${x.id}.json?access_token=${token}`;
		//data.result.forEach(x => $("#tableBody").append(`<tr>	<th scope="row">${x.name}</th>  <td>${x.description}</td> <td><a href="${x.computedUrl}"class="btn btn-primary text-uppercase">Go <img src="https://3stepit.wearebowline.com/imgs/arrow-right.svg" alt="go" class="mCS_img_loaded"></a></td></tr>`))		
		// return fetch(proxyurl + getPageByIdUrl)
		//})).then((result) => {
			