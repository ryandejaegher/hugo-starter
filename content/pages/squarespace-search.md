---
title: "Squarespace Search"
date: 2021-04-25T08:43:43-06:00
draft: false
layout: single-left-no-prose 
showPrevNext: false
---
<p class="max-w-lg">
Looking for a template or want to find a cool plugin? Use the search below and you can search for templates and plugins from Squarespace designers and creators.
</p>

<hr class="mt-12"/>

<div class="algolia mt-12">
      <div id="searchbox" class="ais-SearchBox"></div>
      <div id="hits"></div>
      <div id="pagination"></div>
</div>

<script>
  window.addEventListener('DOMContentLoaded', e => {

  
  const search = instantsearch({
    indexName: "squarespace",
    searchClient: algoliasearch('VL58GALITD', '70620ddb35ad31191ca8a79b034ec4c4'),
    searchFunction(helper) {
      const container = document.querySelector('#hits');
      const pagination = document.querySelector('#pagination');
      //const productGrid = document.querySelector('.Main--products-list');
  
      container.style.display = helper.state.query === '' ? 'none' : '';
      pagination.style.display = helper.state.query === '' ? 'none' : '';
      //productGrid.style.display = helper.state.query === '' ? 'block' : 'none';
      console.log(helper)
      helper.search();
    }
  });
  
  
  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#searchbox',
      placeholder: 'Search...',
      showReset: false,
      showSubmit: false,
      showLoadingIndicator: true,
      cssClasses: {
        root: 'mySearch',
        input: ['px-4','py-2','border-2','rounded','bg-gray-100','max-w-md','w-full','mx-auto','block'],
        loadingIndicator:['text-center'],
        loadingIcon: ['mx-auto','mt-4']
      }
  
    }),
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        empty: '<p class="text-center">no results</p>',
        item: `
          <div class="algolia-item relative h-full flex flex-col">
          <figure class="hit-image block relative aspect-1-1 m-0">
          {{#items.0}}
            <img class="w-full h-full inset-0 absolute block object-cover object-top" src="{{items.0.assetUrl}}" alt="{{title}}" />
          {{/items.0}}
          {{^items.0}}
          <img class="w-full h-full inset-0 absolute block object-cover object-top" src="{{assetUrl}}" alt="{{title}}" />
          {{/items.0}}  
          </figure>
          
            <div class="mt-4 flex flex-col h-full">
              <span class="text-xs text-pink-400">{{author.displayName}}</span>
              <div class="hit-name font-bold">
                {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
              </div>
              <div class="hit-price mt-auto pt-4 tracking-wider">
  
              {{#priceMoney}}
              {{#onSale}}
                <span class="regular-price onSale line-through">\${{priceMoney.value}}</span>
                <span class="sale-price">\${{salePriceMoney.value}}</span>
                {{/onSale}}
                {{^onSale}}
                {{#variants.0}}
                <span class="regular-price">\${{priceMoney.value}}</span>
                {{/variants.0}}
                {{^variants.0}}
                <span class="regular-price">\${{priceMoney.value}}</span>
              {{/variants.0}}
  
              {{/onSale}}
              {{/priceMoney}}
              {{^priceMoney}}
              <span class="regular-price free">Free</span>
              {{/priceMoney}}
                  
              </div>
            </div>
            <a class="absolute inset-0" href="{{url}}"></a>
          </div>
        `,
      },
      cssClasses: {
        root: ['myHits','mt-20'],
        list: ['grid','grid-cols-2','md:grid-cols-3','lg:grid-cols-4','gap-16'],
        item: ['transform','hover:scale-105','transition','duration-300','ease-out']
      }
    }),
    instantsearch.widgets.pagination({
      container: '#pagination',
      showFirst:false,
      showLast: false,
      cssClasses: {
        root: ['myPagination','mt-16'],
        list:['flex','justify-center','space-x-2'],
        link: ['px-3','py-2','block']
      }
    }),
  ]);
  
  search.start();
  console.log('search start');
  
  });

  </script>