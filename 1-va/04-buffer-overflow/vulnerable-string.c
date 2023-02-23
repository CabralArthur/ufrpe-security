#include <stdio.h>
#include <string.h>
#include <stdlib.h>


int main(void) {
    char buf1[5];
    char buf2[5] = "abcd";

    strcpy (buf1, "replacing_buff_2");

    printf("buf1 val: %s\n", buf1);
    printf("buf2 val: %s\n", buf2);
    printf("buf1 adress: %p\n", (void *)buf1);
    printf("buf2 adress: %p\n", (void *)buf2);
}
