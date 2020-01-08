<?php

namespace App\Http\Controllers;

use App\API_REST;
use App\Dato;
use Illuminate\Http\Request;

class APIRESTController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
      $api_url = Curl::to("ACA VA LA URL")->get();

      $api_json = json_decode($api_url);

      $array = [
        "orden" => $req[''],
        "id"=> $req[''],
        "num_pag"=> $req[''],
        "cant_elementos"=>$req[''],
      ];

      return json_encode($array);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\API_REST  $aPI_REST
     * @return \Illuminate\Http\Response
     */
    public function show(API_REST $aPI_REST)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\API_REST  $aPI_REST
     * @return \Illuminate\Http\Response
     */
    public function edit(API_REST $aPI_REST)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\API_REST  $aPI_REST
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, API_REST $aPI_REST)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\API_REST  $aPI_REST
     * @return \Illuminate\Http\Response
     */
    public function destroy(API_REST $aPI_REST)
    {
        //
    }
}
