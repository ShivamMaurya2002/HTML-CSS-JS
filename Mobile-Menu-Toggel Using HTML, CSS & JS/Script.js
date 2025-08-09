function toggleMenu() 
{
  document.querySelectorAll('.hide-on-mobile').forEach((item) => {
    item.classList.toggle('show');
  });
}
