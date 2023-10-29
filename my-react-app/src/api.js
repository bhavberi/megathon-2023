import axios from 'axios';

const ip = '192.168.124.54';

async function get_llama_response(personality) {
	return await axios.get(`http://${ip}:8000/llama1?strig=${personality}`, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => {
			return response.data;
			console.log(response.data);
		})
		.catch(err => console.error(err));
}

async function get_twitter_personality(twitter_username) {
	return await axios.get(`http://${ip}:8000/mbti?twitter_username=${twitter_username}`, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => {
			console.log(response.data[0]);
			return response.data[0]
		})
		.catch(err => console.error(err));
}

async function get_linkedin_report() {
	return ''
}

async function get_personality(twitter_username,setPersonality) {
	const personality = await get_twitter_personality(twitter_username);
	const llama_response = await get_llama_response(personality);
	setPersonality([personality, llama_response]);
	return [personality, llama_response];
}

async function setBarsAndComments(twitter_username, setSentiment, setComments) {
	axios.get(`http://${ip}:8000/sentiment?twitter_username=${twitter_username}`, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => {
			const sentiments=response.data[0]
			delete sentiments["nohate"]
			delete sentiments["nonmisogyny"]
			setSentiment(sentiments);
			setComments(response.data[1]);
			console.log(response.data[0]);
			console.log(response.data[1]);
		})
		.catch(err => console.error(err));
}

async function set_jobs(setJobs,linkedinUsername) {
	axios.get(`http://${ip}:8000/skills?linkedin_link=${linkedinUsername}`, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => {
			// setskills(response.data);
			const jsonObject = JSON.parse(response.data);

			console.log(jsonObject);
			console.log(response.data);
			setJobs(jsonObject);
		})
		.catch(err => console.error(err));
}

async function get_llama_response_2(big_five) {
	return await axios.get(`http://${ip}:8000/llama2?array1=${big_five[0]}&array2=${big_five[1]}&array3=${big_five[2]}&array4=${big_five[3]}&array5=${big_five[4]}`, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => {
			return response.data;
			console.log(response.data);
		})
		.catch(err => console.error(err));
}

export { get_personality, get_twitter_personality, get_llama_response, get_llama_response_2,get_linkedin_report, setBarsAndComments,set_jobs };