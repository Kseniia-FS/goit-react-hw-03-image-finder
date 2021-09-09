const fetchImages = (query, page) => {
  return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=22576222-4c579c663b204aa5d73730e1c&image_type=photo&orientation=horizontal&per_page=12
`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("OOOps!"));
  });
};

export default fetchImages;
