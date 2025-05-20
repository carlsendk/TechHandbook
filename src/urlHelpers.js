const BASE_PATH = '/tech-leadership';

function ensureTrailingSlash(str) {
  return str.endsWith('/') ? str : str + '/';
}

function getWikiUrl(slug) {
  return `${BASE_PATH}/wiki/${ensureTrailingSlash(slug)}`;
}

function getBlogUrl(slug) {
  return `${BASE_PATH}/blog/${ensureTrailingSlash(slug)}`;
}

module.exports = { getWikiUrl, getBlogUrl };
