function renderBlock(cmp) {
  const divChildrens = cmp.children;
  const leftRow = document.createElement('div');
  leftRow.classList.add('blog-list');
  const rightRow = document.createElement('div');
  rightRow.classList.add('blog-assets');
  [...divChildrens].forEach(element => {
    element.classList.add('blog-row');
  });

  const blogIts = document.createElement('div');
  while (cmp.firstElementChild) blogIts.append(cmp.firstElementChild);

  const blogRows = blogIts.querySelectorAll('.blog-row');

  [...blogRows].forEach(element => {
    const children = [...element.children];
    const classes = ['item', 'asset'];
    classes.forEach((c, i) => {
      const section = children[i];
      if (section) section.classList.add(`blog-${c}`);
    });
  });

  const leftItems = blogIts.querySelectorAll('.blog-item');
  const righItems = blogIts.querySelectorAll('.blog-asset');
  leftItems.forEach(element => {
    const blogP = [...element.children];
    const classes = ['title', 'date', 'desc', 'readmore'];
    classes.forEach((c, i) => {
      const section = blogP[i];
      if (section) section.classList.add(`blog-${c}`);
    });
    leftRow.append(element);
  });
  righItems.forEach(element => {
    rightRow.append(element);
  });
  cmp.innerHTML = ''
  cmp.append(leftRow);
  cmp.append(rightRow);


}

export default renderBlock;