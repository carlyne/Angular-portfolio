export class GalleryItemsData {
  
  getRandomStyleSizing() {
    const sizes = ["w--sm", "w--md", "w--lg"];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
  
  itemsThumbnails = [
    {
      id: 1,
      name: 'Illustration1',
      srcImg: '../assets/img/illus.png',
      category: 'illustration',
      size: this.getRandomStyleSizing()
    },
    {
      id: 2,
      name: 'my project',
      srcImg: '../assets/img/projet.png',
      category: 'project',
      size: this.getRandomStyleSizing()
    },
    {
      id: 3,
      name: 'my quote',
      category: 'quote',
      content: 'lorem ipsum dolore situa mentoris',
      size: this.getRandomStyleSizing()
    },
    {
      id: 4,
      name: 'Illustration1',
      srcImg: '../assets/img/illus.png',
      category: 'illustration',
      size: this.getRandomStyleSizing()
    },
    {
      id: 5,
      name: 'Illustration1',
      srcImg: '../assets/img/illus.png',
      category: 'illustration',
      size: this.getRandomStyleSizing()
    },
    {
      id: 6,
      name: 'my project',
      srcImg: '../assets/img/projet.png',
      category: 'project',
      size: this.getRandomStyleSizing()
    },
    {
      id: 7,
      name: 'my quote',
      category: 'quote',
      content: 'lorem ipsum dolore situa mentoris',
      size: this.getRandomStyleSizing()
    }
  ]

  getItemThumbnailById(id: string) {
    const itemsThumbnails = this.itemsThumbnails.find(
      (item) => {
        return item.id === parseInt(id);
      }
    );
    return itemsThumbnails;
  }
}