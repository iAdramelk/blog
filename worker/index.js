async function handleRequest(request) {
  let url = new URL(request.url);
  let path = url.pathname.replace(/%EF%B8%8F/, '').replace(/\/$/, '');
  let site = 'https://dvc.org';
  let blog = 'https://blog.dvc.org';

  // Legacy domain + Medium old blog redirects
  if (url.host === 'blog.dataversioncontrol.com') {
    switch (path) {
      case '/data-version-control-tutorial-9146715eda46':
        return Response.redirect(site + '/doc/tutorials', 301);
      case '/data-version-control-beta-release-iterative-machine-learning-a7faf7c8be67':
        return Response.redirect(site + '/doc/tutorials', 301);
      case '/dvc-heartbeat-6301aebf5c96':
        return Response.redirect(blog + '/march-19-dvc-heartbeat', 301);
      case '/april19-dvc-heartbeat-296c71a59be4':
        return Response.redirect(blog + '/april-19-dvc-heartbeat', 301);
      case '/dvc-0-8-5-release-f66ef3b10684':
        return Response.redirect(
          'https://github.com/iterative/dvc/releases',
          301
        );
      case /^\/.*-[a-z0-9]{12}$/.test(path):
        return Response.redirect(blog + path.replace(/-[a-z0-9]$/, ''), 301);
    }
  }

  return fetch(request);
}

addEventListener('fetch', async event => {
  event.respondWith(handleRequest(event.request));
});
