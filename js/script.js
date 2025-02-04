window.addEventListener('resize', function() {
  const width = window.innerWidth;
  if(width < 768) {
    // 手機版：可以進一步調整介面，例如隱藏部分不必要的元素
    console.log("切換到手機版介面");
  } else {
    console.log("使用桌機或平板版介面");
  }
});
