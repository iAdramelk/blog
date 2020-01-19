async function handleRequest(request) {
  let url = new URL(request.url);
  let path = url.pathname.replace(/%EF%B8%8F/, '');
  let site = 'https://dvc.org';
  let blog = 'https://blog.dvc.org';

  // Legacy domain + Medium old blog redirects
  if (url.host === 'blog.dataversioncontrol.com') {
    switch (path) {
      case '/data-version-control-tutorial-9146715eda46':
        return Response.redirect(site + '/doc/tutorials', 301);
      case '/data-version-control-beta-release-iterative-machine-learning-a7faf7c8be67':
        return Response.redirect(site + '/doc/tutorials', 301);
      case '/november-19-dvc-heartbeat-110404842192':
        return Response.redirect(blog + '/november-19-dvc-heartbeat/', 301);
    }
  }

  return fetch(request);
}

addEventListener('fetch', async event => {
  event.respondWith(handleRequest(event.request));
});
