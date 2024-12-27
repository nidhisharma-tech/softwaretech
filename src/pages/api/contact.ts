import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Here you would typically:
    // 1. Send email notification
    // 2. Store in database
    // 3. Integrate with CRM

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message sent successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to process contact form',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
