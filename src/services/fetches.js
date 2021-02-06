import request from 'superagent';

export async function fetchPost(url) {
  const res = await request
    .get(`${url}`);
  return res.body;
}

export async function createPost(url, json) {
  const res = await request
    .post(`${url}`)
    .send(json);
  return res.body;
}

export async function updatePost(url, json) {
  const res = await request
    .put(`${url}`)
    .send(`${json}`);
  return res.body;
}

export async function deletePost(url) {
  const res = await request
    .delete(`${url}`);
  return res.body;
}
