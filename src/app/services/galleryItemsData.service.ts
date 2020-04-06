export class GalleryItemsData {
  itemsThumbnails = [
    {
      id: 1,
      name: 'Illustration1',
      srcImg: '../assets/img/illus.png',
      category: 'illustration'
    },
    {
      id: 2,
      name: 'my project',
      srcImg: '../assets/img/projet.png',
      category: 'project'
    },
    {
      id: 3,
      name: 'my quote',
      category: 'quote',
      content: 'lorem ipsum dolore situa mentoris'
    },
    {
      id: 4,
      name: 'Illustration1',
      srcImg: '../assets/img/illus.png',
      category: 'illustration'
    },
    {
      id: 5,
      name: 'Illustration1',
      srcImg: '../assets/img/illus.png',
      category: 'illustration'
    },
    {
      id: 6,
      name: 'my project',
      srcImg: '../assets/img/projet.png',
      category: 'project'
    },
    {
      id: 7,
      name: 'my quote',
      category: 'quote',
      content: 'lorem ipsum dolore situa mentoris'
    }
  ]

  getItemThumbnailById(id: number) {
    const itemsThumbnails = this.itemsThumbnails.find(
      (item) => {
        return item.id === id;
      }
    );
    return itemsThumbnails;
}
}