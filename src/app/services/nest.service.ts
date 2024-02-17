import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class NestService {
  constructor(private http: HttpClient) {}
  async createUser() {
    this.http
      .post("http://localhost:3000/auth/signup", {
        email: "bhavanishankar6917@gmail.com",
        password: "Kenmiles1234@",
        phone: "9566077299",
      })
      .subscribe((next) => {
        console.log(next);
      });
    // this.http.request()
  }
  setSession() {
    this.http
      .post("http://localhost:3000/session", {
        access_token: "sfddsfdsaf",
      })
      .subscribe((value) => {
        console.log(value);
      });
  }
  async addPost(image: string, caption: string) {
    // let base64 = btoa(String.fromCharCode(...new Uint8Array(image)));
    let requestBody = JSON.stringify({
      image,
      caption,
    });
    // let response = await this.http.post(
    //   "http://localhost:3000/posts/add",
    //   {
    //     base64,
    //     caption,
    //   },
    //   { withCredentials: true }
    // );
    let response = await fetch("http://localhost:3000/posts/add", {
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
      method: "POST",
      credentials: "include",
    });
    response.body
      ?.getReader()
      .read()
      .then((value) => {
        let arr = value.value;
        let textDecoder = new TextDecoder();
        console.log(textDecoder.decode(arr, { stream: true }));
      });
    // response.subscribe((next) => console.log(next));
  }
}
//-- ((bucket_id = 'posts'::text) AND (storage.extension(name) = 'jpg'::text) AND (lower((storage.foldername(name))[1]) = 'public'::text) AND (auth.role() = 'anon'::text))
//((bucket_id = 'posts'::text) AND (storage.extension(name) = 'png'::text) AND (lower((storage.foldername(name))[1]) = 'public'::text) AND (auth.role() = 'anon'::text))
