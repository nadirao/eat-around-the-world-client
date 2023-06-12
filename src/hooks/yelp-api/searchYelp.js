import {API_BASE_URL, BEARER_TOKEN} from './config'


export default async function searchYelp(term, location) {

  const url = `${API_BASE_URL}/businesses/search?term=${term}&location=${location}`;

  const data = await fetch(`${url}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      withCredentials: true
    },
  });

  const response = await data.json();

  if (response) {
    const businesses = response.businesses.map((business) => {
      return {
        id: business.id,         
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories,
        rating: business.rating,
        reviewCount: business.review_count
      }
    })

    return businesses
  } else {
    throw new Error("Request failed!");
  }
}