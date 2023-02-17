import { useState } from "react";

export const usePages = ( initpage = 0) => {
  const [page, setchangePage] = useState(initpage);
  
  const onNextPageChange = () => {
    //console.log(page);
    setchangePage(page+1);
    if (page === 3) {
      setchangePage(0);
    }
  }

  const onPreviousPageChange = () => {
    //console.log(page);
    setchangePage(page-1);
    if (page === 0) {
      setchangePage(3);
    }
  }


  return {
    page,
    onNextPageChange,
    onPreviousPageChange,
  }

}
