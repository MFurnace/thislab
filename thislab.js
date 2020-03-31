//  1. Single object named `slideshow` 
// 2. array called `photoList` that contains the names of the photos as strings
// 2. Integer `currentPhotoIndex` represents photo in photoList` currently displayed
// 3. `nextPhoto()` function moves `currentPhotoIndex` to next index `if `there is one, and:
    // 4. logs the current photo name. 5. Otherwise, log "End of slideshow";
    //  6. A `prevPhoto()` function that does the same thing, but backwards.
var slideshow = {
    
    photoList: ["Pic1", "Pic2", "Pic3", "Pic4."],
    
    currentPhotoIndex: 0,
    currentPhotoIndex: Math.floor((Math.random() * 3) + 1),
    nextPhoto: function () {
        if (this.currentPhotoIndex <= this.photoList.length) {
            console.log(this.currentPhotoIndex + 1);
        }
        else {
            console.log('End of slideshow');
        }
    },
    prevPhoto: function () {
        if (this.currentPhotoIndex >= this.photoList.length) {
            console.log(this.currentPhotoIndex - 1);
        } else {
            console.log('End of slideshow');
        }
    },
    //  7. A function `getCurrentPhoto()` that returns the current photo from the list.
    getCurrentPhoto: function () {
        return this.photoList[this.currentPhotoIndex];
    }
}
console.log(slideshow.currentPhotoIndex);
console.log(slideshow.getCurrentPhoto());