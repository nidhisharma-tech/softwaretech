import type { APIRoute } from 'astro';
import { createMentoringSession } from '../../lib/mentoring';
import { validateSessionRequest } from '../../lib/validation';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const mentorId = body.mentorId;

    if (!mentorId) {
      return new Response(JSON.stringify({ error: 'Mentor ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate the session request
    const validationResult = await validateSessionRequest(mentorId);
    if (!validationResult.success) {
      return new Response(JSON.stringify({ error: validationResult.error }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create the mentoring session
    const session = await createMentoringSession(mentorId);

    return new Response(
      JSON.stringify({
        success: true,
        sessionId: session.id,
        message: 'Session scheduled successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error scheduling session:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to schedule session',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
