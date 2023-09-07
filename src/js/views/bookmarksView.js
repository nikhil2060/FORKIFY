import icons from "url:../../img/icons.svg";
import View from "./View.js";

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = "No Bookmarks found";
  _Message = "";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map((ing) => {
        return `<li class="preview">
        <a class="preview__link preview__link--active" href="#${ing.id}">
          <figure class="preview__fig">
            <img src="${ing.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${ing.title}</h4>
            <p class="preview__publisher">${ing.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`;
      })
      .join("");
  }
}

export default new BookmarksView();
