<?php

namespace App\Http\Controllers;

use App\Models\Contacts;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class ContactsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response 
    {
        return Inertia::render('Contacts/Contacts', [
            'contacts' => Contacts::with('users')->get(['id', 'name', 'lastname', 'phone_number', 'city', 'state', 'user_id', 'created_at', 'updated_at'])
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Contacts/ContactForm',[

        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        logger()->info('Received request to store contact', $request->all());
        
        $user_id = $request->user()->id;

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'created_at' => 'date_format:Y-m-d',
            'updated_at' => 'date_format:Y-m-d'
        ]);

        $validated['user_id'] = $user_id;
 
        $request->user()->contacts()->create($validated);

        //Contacts::create($validated);
 
        return redirect(route('contacts.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Contacts $contacts)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contacts $contacts)
    {
        $contact = Contacts::findOrFail($contacts);

        return Inertia::render('Contacts/ContactEdit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contacts $contacts): RedirectResponse
    {
        $this->authorize('update', $contacts);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'updated_at' => 'date_format:Y-m-d'
        ]);

        $contacts->update($validated);  

        return redirect(route('contacts.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contacts $contacts)
    {
        //
    }
}
