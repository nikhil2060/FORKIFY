import View from "./View.js";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");

      if (!btn) return;

      const goTopage = +btn.dataset.goto;

      handler(goTopage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / 10);

    if (currPage === 1 && numPages > 1)
      return `
       <button data-goto='${
         currPage + 1
       }' class="btn--inline pagination__btn--next">
         <span> Page ${currPage + 1}</span>
         <svg class="search__icon">
           <use href="${icons}#icon-arrow-right"></use>
         </svg>
       </button>`;

    if (currPage === numPages && numPages > 1) {
      return `<button data-goto='${
        currPage - 1
      }' class="btn--inline pagination__btn--prev">
           <svg class="search__icon">
             <use href="${icons}#icon-arrow-left"></use>
           </svg>
           <span> Page ${currPage - 1}</span>
         </button>`;
    }

    if (currPage < numPages) {
      return `<button data-goto='${
        currPage - 1
      }' class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currPage - 1}</span>
    </button>

    <button data-goto='${
      currPage + 1
    }' class="btn--inline pagination__btn--next">
      <span> Page ${currPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
    `;
    }

    return "only one page";
  }
}

export default new PaginationView();

// return `<button class="btn--inline pagination__btn--prev">
//     <svg class="search__icon">
//       <use href="src/img/icons.svg#icon-arrow-left"></use>
//     </svg>
//     <span>Page 1</span>
//   </button>
//   <button class="btn--inline pagination__btn--next">
//     <span>Page 3</span>
//     <svg class="search__icon">
//       <use href="src/img/icons.svg#icon-arrow-right"></use>
//     </svg>
//   </button>`;
//   }
