import type { APIRoute } from 'astro';
import {
  getSkills,
  getSkillById,
  getSkillsByType,
  createSkill,
  updateSkill,
  deleteSkill,
  type Skill,
} from '../../lib/db.js';

export const GET: APIRoute = async ({ url }) => {
  try {
    const id = url.searchParams.get('id');
    const type = url.searchParams.get('type');

    if (id) {
      const skill = await getSkillById(Number(id));
      if (!skill) {
        return new Response(JSON.stringify({ error: 'Skill not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return new Response(JSON.stringify(skill), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (type) {
      const skills = await getSkillsByType(type);
      return new Response(JSON.stringify(skills), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const skills = await getSkills();
    return new Response(JSON.stringify(skills), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = (await request.json()) as Omit<Skill, 'id' | 'created_at' | 'updated_at'>;
    const skill = await createSkill(data);
    return new Response(JSON.stringify(skill), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to create skill' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const PUT: APIRoute = async ({ request, url }) => {
  try {
    const id = url.searchParams.get('id');
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = (await request.json()) as Partial<Omit<Skill, 'id' | 'created_at' | 'updated_at'>>;
    const skill = await updateSkill(Number(id), data);
    return new Response(JSON.stringify(skill), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to update skill' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const DELETE: APIRoute = async ({ url }) => {
  try {
    const id = url.searchParams.get('id');
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await deleteSkill(Number(id));
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete skill' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
