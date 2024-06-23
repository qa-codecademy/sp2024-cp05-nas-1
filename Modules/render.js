export class Render
{
    static main(news, element)
    {
      //console.log(dayjs());
      element.innerHTML = '';
      news.forEach((newsItem) =>
      {
        element.innerHTML += `
          <div class="row justify-content-center mb-4">
            <div class="col-auto">
              <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">

                  <div class="col-md-4">
                    <img src="${newsItem.urlToImage}" class="img-fluid rounded-start" alt="${newsItem.title}">
                  </div>

                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${newsItem.title}</h5>
                      <p class="card-text">${newsItem.description.substring(0, 100)}...</p>
                      <p class="card-text"><small class="text-body-secondary">Published: ${dayjs(newsItem.pubDate).format('ddd, D MMM, YYYY HH:mm')}</small></p>
                      <a href="javascript:void(0)" class="btn btn-primary view-full-story" data-id="${newsItem.id}">Read more</a>
                      <a href="${newsItem.url}" class="btn btn-primary">View source</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        });

        Render.addEventListeners();
    };

    static addEventListeners()
    {
      document.querySelectorAll('.view-full-story').forEach(button =>
      {
        button.addEventListener('click', function()
        {
          const id = parseInt(this.getAttribute('data-id'));
          newsService.viewFullStory(id);
        });
      });
    }    
}