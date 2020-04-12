export class GalleryItemsData {
  
  getRandomStyleSizing(category) {
    const imgSizes = ["w--sm", "w--md"],
          sizes = ["w--sm", "w--md", "w--lg"];

    if (category === 'illustration') {
      return imgSizes[Math.floor(Math.random() * imgSizes.length)];
    } else {
      return sizes[Math.floor(Math.random() * sizes.length)];
    }
  }
  
  itemsThumbnails = [
    {
      id: 1,
      name: 'Illustration1',
      srcImg: '../assets/img/etiquette.jpg',
      category: 'illustration',
      size: this.getRandomStyleSizing('illustration')
    },
    {
      id: 2,
      name: 'my project',
      srcImg: '../assets/img/projet.png',
      category: 'project',
      size: this.getRandomStyleSizing('project')
    },
    {
      id: 3,
      name: 'my quote',
      category: 'quote',
      content: 'Il faut toute la vie pour apprendre à vivre',
      size: this.getRandomStyleSizing('quote')
    },
    {
      id: 4,
      name: 'Illustration2',
      srcImg: '../assets/img/01.jpg',
      category: 'illustration',
      size: this.getRandomStyleSizing('illustration')
    },
    {
      id: 5,
      name: 'Illustration3',
      srcImg: '../assets/img/02.jpg',
      category: 'illustration',
      size: this.getRandomStyleSizing('illustration')
    },
    {
      id: 6,
      name: 'my project',
      srcImg: '../assets/img/projet.png',
      category: 'project',
      size: this.getRandomStyleSizing('project')
    },
    {
      id: 7,
      name: 'my quote',
      category: 'quote',
      content: 'lorem ipsum dolore situa mentoris',
      size: this.getRandomStyleSizing('quote')
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