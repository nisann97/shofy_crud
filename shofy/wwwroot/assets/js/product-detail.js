$(function(){
    let product = {};
    if (JSON.parse(localStorage.getItem("product")) == null) {
      localStorage.setItem("product", JSON.stringify(product));
    } else {
      product = JSON.parse(localStorage.getItem("product"));
    }


    if(JSON.parse(localStorage.getItem("product")) != null){
      $("#product-detail-page").html(`
      <div class="container-main">
      <div class="row">
          <div class="col-12 col-lg-6 col-xl-7">
              <div class="left-side">
                  <div class="row">
                      <div class="col-12 col-sm-2">
                          <div class="row">
                              <div class="col-3 col-sm-12">
                                  <div class="product-image first active-image">
                                      <img src="${product.image1}" alt="">
                                  </div>
                              </div>
                              <div class="col-3 col-sm-12">
                                  <div class="product-image second">
                                      <img src="${product.image2}" alt="">
                                  </div>
                              </div>
                              <div class="col-3 col-sm-12">
                                  <div class="product-image third">
                                      <img src="${product.image3}" alt="">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-12 col-sm-10">
                          <div class="preview-image first-prev active-preview-image">
                              <img src="${product.image1}" alt="">
                          </div>
                          <div class="preview-image second-prev">
                              <img src="${product.image2}" alt="">
                          </div>
                          <div class="preview-image third-prev">
                              <img src="${product.image3}" alt="">
                          </div>
                          <div class="preview-image fourth-prev">
                              <img src="${product.image4}" alt="">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-5">
              <div class="right-side">
                  <div class="name">
                      <span>${product.category}</span>
                      <h1>${product.name}</h1>
                  </div>
                  <div class="reviews">
                      <span>${product.stock}</span>
                      <div class="user-ratings">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <span>(3 review)</span>
                      </div>
                  </div>
                  <div class="detail">
                      <p>Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset</p>
                  </div>
                  <div class="price">
                      <span class="old-price">${product.oldPrice}</span>
                      <span class="new-price">$<span>${product.newPrice}</span></span>
                  </div>
                  <div class="color">
                      <span>Color:</span>
                      <div class="colors">
                          <div class="purply-blue"></div>
                          <div class="light-grey"></div>
                          <div class="baby-pink"></div>
                          <div class="bluish-cyan"></div>
                      </div>
                  </div>
                  <div class="actions">
                      <span>Quantity</span>
                      <div class="row">
                          <div class="col-4 col-sm-3 col-lg-5 col-xl-3">
                              <div class="count-input">
                                  <span class="minus"><img src="./assets/icons/minus.svg" alt=""></span>
                                  <input type="text" class="product-count-input" value="1" disabled>
                                  <span class="plus"><img src="./assets/icons/plus.svg" alt=""></span>
                              </div>
                          </div>
                          <div class="col-8 col-sm-9 col-lg-7 col-xl-9">
                              <a href="" class="add-to-cart-preview" data-id="11">Add to cart</a>
                          </div>
                          <div class="col-12">
                              <a href="" class="buy-now">Buy Now</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>`)
    }


$(".right-side li .content").click(function () {
    $(this).next().toggleClass("menu-down");
    $(this).parent().siblings().find(".menu").removeClass("menu-down");
  });

  $(".all-categories").click(function () {
    $(".categories").toggleClass("d-none");
  });
  
    //#region back-to-top-button
    var btn = $("#button");

    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
    });
  
    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });
  
    //#endregion

    
  //#region sidebar
                  $(".bars").click(function (e) {
                    e.preventDefault();
                    $(".right-side-menu").addClass("opened");
                    $(".right-side-menu").removeClass("closed");
                  });
                
                  $(".close").click(function (e) {
                    e.preventDefault();
                    $(".right-side-menu").removeClass("opened");
                    $(".right-side-menu").addClass("closed");
                  });
                
                  //#endregion




//#region quick-view-tabmenu

$(".first").click(function(){
    $(this).addClass("active-image")
    $(this).parent().parent().parent().next().find(".first-prev").addClass("active-preview-image")

    $(this).parent().parent().find(".second").removeClass("active-image");
    $(this).parent().parent().parent().next().find(".second-prev").removeClass("active-preview-image")

    $(this).parent().parent().find(".third").removeClass("active-image");
    $(this).parent().parent().parent().next().find(".third-prev").removeClass("active-preview-image")

    $(this).parent().parent().find(".fourth").removeClass("active-image");
    $(this).parent().parent().parent().next().find(".fourth-prev").removeClass("active-preview-image")
  })

  $(".second").click(function(){
    $(this).addClass("active-image")
    $(this).parent().parent().parent().next().find(".second-prev").addClass("active-preview-image")

    $(this).parent().parent().find(".first").removeClass("active-image");
    $(this).parent().parent().parent().next().find(".first-prev").removeClass("active-preview-image")

    $(this).parent().parent().find(".third").removeClass("active-image");
    $(this).parent().parent().parent().next().find(".third-prev").removeClass("active-preview-image")

    $(this).parent().parent().find(".fourth").removeClass("active-image");
    $(this).parent().parent().parent().next().find(".fourth-prev").removeClass("active-preview-image")
  })

  $(".third").click(function(){
    $(this).addClass("active-image")
    $(this).parent().parent().parent().next().find(".third-prev").addClass("active-preview-image")

    $(this).parent().parent().find(".second").removeClass("active-image");
    $(this).parent().parent().parent().next().find(".second-prev").removeClass("active-preview-image")

    $(this).parent().parent().find(".first").removeClass("active-image");
    $(this).parent().parent().parent().next().find(".first-prev").removeClass("active-preview-image")

    $(this).parent().parent().find(".fourth").removeClass("active-image");
    $(this).parent().parent().parent().next().find(".fourth-prev").removeClass("active-preview-image")
    
  })

  $(".fourth").click(function(){
    $(this).addClass("active-image")
    $(this).parent().parent().parent().next().find(".fourth-prev").addClass("active-preview-image")

    $(this).parent().parent().find(".second").removeClass("active-image");
    $(this).parent().parent().parent().next().find(".second-prev").removeClass("active-preview-image")

    $(this).parent().parent().find(".third").removeClass("active-image");
    $(this).parent().parent().parent().next().find(".third-prev").removeClass("active-preview-image")

    $(this).parent().parent().find(".first").removeClass("active-image");
    $(this).parent().parent().parent().next().find(".first-prev").removeClass("active-preview-image")
  })













  //#endregion




  $(".count-input .plus").click(function(){
    let inputValue = $(this).prev().val()
    inputValue = parseInt(inputValue) + 1
    $(this).prev().val(inputValue)
  });

  $(".count-input .minus").click(function(){
    let inputValue = $(this).next().val()
    if(inputValue > 1){
      inputValue = parseInt(inputValue) - 1
      $(this).next().val(inputValue)
    }
  });

  let products = [];
  if (JSON.parse(localStorage.getItem("products")) == null) {
    localStorage.setItem("products", JSON.stringify(products));
  } else {
    products = JSON.parse(localStorage.getItem("products"));
  }

  let wishlist = [];
  if (JSON.parse(localStorage.getItem("wishlist")) == null) {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } else {
    wishlist = JSON.parse(localStorage.getItem("wishlist"));
  }
  
  $(".add-to-cart").click(function (e) {
    e.preventDefault();
    let productId = $(this).parent().parent().parent().parent().parent().attr("data-id");
    let productImage = $(this).parent().parent().parent().prev().children().first().attr("src");
    let productName = $(this).parent().parent().parent().parent().next().children().first().next().html();
    let productPrice = $(this).parent().parent().parent().parent().next().children().last().children().last().children().first().html();

    if (
      $(this).parent().parent().parent().parent().parent().hasClass("out-of-stock")
    ) {
      toastr["error"](`${productName} out of stock`);
      toastr.options = {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: "toast-top-center",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
      };
      return;
    }

    let existProduct = products.find((m) => m.id == parseInt(productId));

    if (existProduct != undefined) {
      existProduct.count++;
    } else {
      products.push({
        id: parseInt(productId),
        image: productImage,
        name: productName,
        price: parseFloat(productPrice),
        count: 1,
      });
    }

    localStorage.setItem("products", JSON.stringify(products));

    toastr["success"](`${productName} added to cart`);
    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-center",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };

    getBasketCount(products);
    getBasketProducts(products);
    getTotalPrice(products);
    checkBasket(products);
  });

  $(".add-to-wishlist").click(function (e) {
    e.preventDefault();
    let productId = $(this).parent().parent().parent().parent().parent().attr("data-id");
    let productImage = $(this).parent().parent().parent().prev().children().first().attr("src");
    let productName = $(this).parent().parent().parent().parent().next().children().first().next().html();
    let productPrice = $(this).parent().parent().parent().parent().next().children().last().children().last().children().first().html();

    console.log(productImage);
    let existProduct = wishlist.find((m) => m.id == parseInt(productId));

    if (existProduct != undefined) {
      toastr["error"](`${productName} remove to wishlist`);
      toastr.options = {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: "toast-top-center",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
      };
      return;
    } else {
      wishlist.push({
        id: parseInt(productId),
        image: productImage,
        name: productName,
        price: parseFloat(productPrice),
        count: 1,
      });
      $(this).addClass("active-wishlist");
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    toastr["success"](`${productName} added to wishlist`);
    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-center",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };

    getWishlistCount(wishlist);
  });

  function checkBasket(products){
    if(products.length == 0){
      $(".mini-cart .cart-mini-body").addClass("d-none");
      $(".mini-cart .cart-mini-empty").removeClass("d-none");
    }else{
      $(".mini-cart .cart-mini-body").removeClass("d-none");
      $(".mini-cart .cart-mini-empty").addClass("d-none");
    }
  }


  function getBasketCount(products) {
    let count = 0;
    if (products.length != 0) {
      for (const product of products) {
        count += product.count;
      }
    }

    $("#header-sticky .actions .cart-count").html(count);
  }

  function getWishlistCount(products) {
    let count = 0;
    if (wishlist.length != 0) {
      for (const product of products) {
        count++;
      }
    }

    $("#header-sticky .actions .wishlist-count").html(count);
  }

  function checkWishlist(wishlist) {
    let products = $(".product");
    for (const product of products) {
      for (const item of wishlist) {
        if (product.getAttribute("data-id") == item.id) {
          product.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.firstElementChild.setAttribute(
            "class",
            "add-to-wishlist active-wishlist"
          );
        }
      }
    }
  }

  function getBasketProducts(products) {
    let data = ""
    products.forEach(product => {
      data+= `                        
      <div class="col-12">
      <div class="mini-product">
          <div class="row">
              <div class="col-4">
                  <div class="image">
                      <a href="">
                          <img src="${product.image}" alt="">
                      </a>
                  </div>
              </div>
              <div class="col-7">
                  <div class="product-details">
                      <h1>${product.name}</h1>
                      <div class="price-count">
                          <span class="cart-mini-price">$${product.price * product.count}</span>
                          <span class="cart-mini-count">x${product.count}</span>
                      </div>
                  </div>
              </div>
              <div class="col-1">
                  <div class="remove-mark">
                      <img src="./assets/icons/xmark.svg" alt="" class="remove-icon" data-id="${product.id}">
                  </div>
              </div>
          </div>
      </div>
      </div> `
    }); 

    $(".cart-mini .cart-item .mini-products").html(data);
    $(".mini-product .remove-icon").click(function(){
      products = products.filter(m => m.id != $(this).attr("data-id"))
      localStorage.setItem("products",JSON.stringify(products));
      $(this).parent().parent().parent().parent().remove();
  
      getBasketProducts(products);
      getBasketCount(products);
      getTotalPrice(products);
      checkBasket(products)

      toastr["error"](`${$(this).parent().parent().prev().children().first().children().first().html()} removed from cart`);
      toastr.options = {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: "toast-top-center",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
      };
    })

  }

  function getTotalPrice(products){
    let sum = 0
    products.forEach(product => {
      sum+= product.price * product.count
      Math.round(sum)
    });

    $(".cart-mini .total-price .total").children().first().html(sum);
  }

  checkBasket(products)
  getTotalPrice(products);
  checkWishlist(wishlist);
  getBasketCount(products);
  getWishlistCount(wishlist);
  getBasketProducts(products);


  $(".add-to-cart-preview").click(function(e){
    e.preventDefault();
    let productId = $(this).attr("data-id");
    let productImage = $(this).parent().parent().parent().parent().parent().prev().children().first().find(".active-preview-image").children().first().attr("src");
    let productName = $(this).parent().parent().parent().parent().find(".name").children().last().html();
    let productPrice = $(this).parent().parent().parent().parent().find(".price").find(".new-price").children().first().html();
    let productCount = $(this).parent().parent().children().first().find(".product-count-input").val();
    if (
      $(this).parent().parent().parent().parent().find(".reviews").children().first().html() == "out-of-stock"
    ) {
      toastr["error"](`${productName} out of stock`);
      toastr.options = {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: "toast-top-center",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
      };
      return;
    }

    let existProduct = products.find((m) => m.id == parseInt(productId));

    if (existProduct != undefined) {
      existProduct.count++;
    } else {
      products.push({
        id: parseInt(productId),
        image: productImage,
        name: productName,
        price: parseFloat(productPrice),
        count: parseInt(productCount),
      });
    }

    localStorage.setItem("products", JSON.stringify(products));

    toastr["success"](`${productCount} ${productName} added to cart`);
    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-center",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };

    getBasketCount(products);
    getBasketProducts(products);
    getTotalPrice(products);
    checkBasket(products);
  })



  $(".cart").click(function (e) {
    e.preventDefault();
    $(".mini-cart").addClass("opened-cart");
    $(".mini-cart").removeClass("closed-cart");
  });

  $(".close-mini-cart").click(function (e) {
    e.preventDefault();
    $(".mini-cart").removeClass("opened-cart");
    $(".mini-cart").addClass("closed-cart");
  });

  $(".overlay").click(function(){
    $(".mini-cart").removeClass("opened-cart");
    $(".mini-cart").addClass("closed-cart");
  })












  //#region product-detail-tabmenu



  $(".description").click(function(){
    $(this).addClass("active-nav");

    $(".info").removeClass("active-nav");
    $(".review-tab").removeClass("active-nav");


    $(".description-content").removeClass("d-none")
    $(".additional-information").addClass("d-none")
    $(".reviews-area").addClass("d-none")
  })

  $(".info").click(function(){
    $(this).addClass("active-nav");

    $(".description").removeClass("active-nav");
    $(".review-tab").removeClass("active-nav");


    $(".description-content").addClass("d-none")
    $(".additional-information").removeClass("d-none")
    $(".reviews-area").addClass("d-none")
  })


  $(".review-tab").click(function(){
    $(this).addClass("active-nav");

    $(".info").removeClass("active-nav");
    $(".description").removeClass("active-nav");


    $(".description-content").addClass("d-none")
    $(".additional-information").addClass("d-none")
    $(".reviews-area").removeClass("d-none")
  })














  //#endregion
  
  
  
})