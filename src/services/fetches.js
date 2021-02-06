import request from 'superagent';

export async function fetchPost(URL) {
  const res = await request
    .get(`${URL}`);
  return res.body;
}

export async function createPost(URL, JSON) {
  const res = await request
    .post(`${URL}`)
    .send(JSON);
  return res.body;
}

export async function updatePost(URL, JSON) {
  const res = await request
    .put(`${URL}`)
    .send(`${JSON}`);
  return res.body;
}

export async function deletePost(URL) {
  const res = await request
    .delete(`${URL}`);
  return res.body;
}
