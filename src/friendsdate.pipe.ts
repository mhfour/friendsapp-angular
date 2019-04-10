import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'friendsdate'
})
export class FriendsDatePipe implements PipeTransform {
    transform(dateInMillis: string) {
    }
}