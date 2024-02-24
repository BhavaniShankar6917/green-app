import { NestService } from "./nest.service";
import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SupabaseService {
  private supabase: SupabaseClient;
  content: any;
  constructor(
    private route: Router,
    private nest: NestService,
    private http: HttpClient
  ) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey

      // {
      //   auth: {
      //     flowType: 'pkce',
      //     detectSessionInUrl: true,
      //   },
      // }
    );

    // this.supabase.auth.setSession({ access_token: "", refresh_token: "" });
  }
  signin(email: string, password: string) {
    this.supabase.auth
      .signInWithPassword({ email, password })
      .then((response) => {
        const maxAge = 100 * 365 * 24 * 60 * 60; // 100 years, never expires
        document.cookie = `my-access-token=${response.data.session?.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
        document.cookie = `my-refresh-token=${response.data.session?.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;

        console.log(response);
        // this.nest.setSession(response.data.session?.access_token,response.data.session.)
        this.route.navigate(["/feed"]);
        sessionStorage.setItem("id", response.data.user?.id as string);
      })
      .catch((error) => {
        console.log("Error logging in :", error);
      });
  }
  async signinUsingBackend() {
    // document.cookie =
    //   'sb-lldhehuhiaiqeyhjbgdt-auth-token={access_token":"eyJhbGciOiJIUzI1NiIsImtpZCI6InhKbkhXQ25mdXlDdzRGOEUiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjkxOTkwMTQ2LCJpYXQiOjE2OTE5ODY1NDYsImlzcyI6Imh0dHBzOi8vbGxkaGVodWhpYWlxZXloamJnZHQuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImMyYzQyNTRmLWU2MWMtNDA0MC1iYmEwLWE3NGNlZjZhMDYyMyIsImVtYWlsIjoiYmhhdmFuaXNoYW5rYXI2OTE3QGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNjkxOTgxMDU2fV0sInNlc3Npb25faWQiOiJkNWY1MmZiNC1lNzE0LTRiYmQtYTVmMy1mNjQ2NWRkNTg2Y2QifQ.gykYzvrHNDRscrmLPqulBNTw4033gxP1MPcenSxQagc","token_type":"bearer","expires_in":3600,"refresh_token":"2XatD0a5jj7uMOOJOQanWw","user":{"id":"c2c4254f-e61c-4040-bba0-a74cef6a0623","aud":"authenticated","role":"authenticated","email":"bhavanishankar6917@gmail.com","email_confirmed_at":"2023-08-12T09:28:12.603826Z","phone":"","confirmation_sent_at":"2023-08-12T09:27:03.901341Z","confirmed_at":"2023-08-12T09:28:12.603826Z","last_sign_in_at":"2023-08-14T02:44:16.591638Z","app_metadata":{"provider":"email","providers":["email"]},"user_metadata":{},"identities":[{"id":"c2c4254f-e61c-4040-bba0-a74cef6a0623","user_id":"c2c4254f-e61c-4040-bba0-a74cef6a0623","identity_data":{"email":"bhavanishankar6917@gmail.com","sub":"c2c4254f-e61c-4040-bba0-a74cef6a0623"},"provider":"email","last_sign_in_at":"2023-08-12T09:27:03.900019Z","created_at":"2023-08-12T09:27:03.900054Z","updated_at":"2023-08-12T09:27:03.900054Z"}],"created_at":"2023-08-12T09:27:03.897609Z","updated_at":"2023-08-14T04:15:46.966983Z"},"expires_at":1691990148}';
    let response: Observable<HttpResponse<Object>> = (await this.http.post(
      "http://localhost:3000/supabase/signin",
      {
        email: "bhavanishankar6917@gmail.com",
        password: "Kenmiles1234@",
        phone: "9566077299",
      },
      {
        withCredentials: true,
      }
    )) as Observable<HttpResponse<Object>>;
    response.subscribe((next) => {
      console.log(next);
    });
  }
  async getSession() {
    let response = await this.http.get(
      "http://localhost:3000/supabase/session",
      { withCredentials: true }
    );
    response.subscribe((next) => console.log(next));
  }
  async createPost() {
    let response = await this.http.post(
      "http://localhost:3000/posts/add",
      {},
      { withCredentials: true }
    );
    response.subscribe((next) => console.log(next));
  }
  registerUser(email: string, password: string) {
    this.supabase.auth
      .signUp({ email, password })
      .then((response) => {
        console.log("User Registered", response.data);
      })
      .catch((error) => {
        console.log("Error registering user", error);
      });
  }
  checkUser(email: string) {
    return this.supabase.from("green_users").select("email").eq("email", email);
  }
  async logout() {
    // console.log('comes here');
    // await this.supabase.auth.signOut().then((suc) => {
    //   this.route.navigate(['/login']);
    // });
    // console.log(error);
  }

  async getFeedForUser() {
    let response = await this.http.get("http://localhost:3000/posts/feed", {
      withCredentials: true,
    });
    response.subscribe((next) => {
      console.log(next, typeof next);
    });
  }
  async getPostsOfOneUser() {
    // let content;
    return await this.http.get(
      "http://localhost:3000/posts/755edc7a-a9bc-4d9d-a573-03d4fe5fd759",
      {
        withCredentials: true,
      }
    );
  }
  async getLikesInfo(postid: number, username: string) {
    return await this.supabase
      .from("likes")
      .select(`post_id, username, status`)
      .filter("post_id", "eq", postid)
      .filter("username", "eq", username);
  }
  async getFollowing(username: string) {
    return await this.supabase
      .from("followers")
      .select("following")
      .eq("follower", username);
  }
  async getUserDetails(userId: string) {
    return await this.supabase
      .from("users")
      .select("username, display_name, photo_url")
      .eq("id", userId);
  }
  insertdata() {
    this.supabase
      .from("users")
      .insert({
        username: "bhavanishankar",
        display_name: "Bhavani Shankar",
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  // addLike(postid: number, username: string) {
  //   this.supabase
  //     .from("likes")
  //     .select("id")
  //     .eq("post_id", postid)
  //     .eq("username", username)
  //     .then((res) => {
  //       if (res.data) {
  //         this.supabase
  //           .from("likes")
  //           .update({
  //             status: true,
  //           })
  //           .eq("post_id", postid)
  //           .eq("username", username)
  //           .then((res) => {
  //             console.log(res.data);
  //           });
  //         this.supabase.rpc("increment");
  //       } else {
  //         this.supabase.from("likes");
  //       }
  //     });
  // }
  async addLike(postid: number, recordExists: boolean) {
    const { data, error } = await this.supabase.rpc("increment", {
      x: 1,
      row_id: postid,
    });
    if (recordExists) {
      await this.supabase.from("likes").update({
        status: true,
      });
    } else {
      await this.supabase.from("likes").insert({
        post_id: postid,
        username: sessionStorage["username"],
        status: true,
      });
    }
    if (error) console.error(error);
    else console.log(data);
  }
  async removeLike(postid: number, recordExists: boolean) {
    const { data, error } = await this.supabase.rpc("decrement", {
      x: 1,
      row_id: postid,
    });
    if (recordExists) {
      await this.supabase.from("likes").update({
        status: false,
      });
    } else {
      await this.supabase.from("likes").insert({
        post_id: postid,
        username: sessionStorage["username"],
        status: false,
      });
    }
  }
}
