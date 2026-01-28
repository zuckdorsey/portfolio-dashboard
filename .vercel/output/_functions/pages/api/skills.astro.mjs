import { t as deleteSkill, v as getSkillById, w as getSkillsByType, x as getSkills, y as createSkill, z as updateSkill } from '../../chunks/db_Dwi_5F6a.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url }) => {
  try {
    const id = url.searchParams.get("id");
    const type = url.searchParams.get("type");
    if (id) {
      const skill = await getSkillById(Number(id));
      if (!skill) {
        return new Response(JSON.stringify({ error: "Skill not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" }
        });
      }
      return new Response(JSON.stringify(skill), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (type) {
      const skills2 = await getSkillsByType(type);
      return new Response(JSON.stringify(skills2), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const skills = await getSkills();
    return new Response(JSON.stringify(skills), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const skill = await createSkill(data);
    return new Response(JSON.stringify(skill), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to create skill" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const PUT = async ({ request, url }) => {
  try {
    const id = url.searchParams.get("id");
    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const data = await request.json();
    const skill = await updateSkill(Number(id), data);
    return new Response(JSON.stringify(skill), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to update skill" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const DELETE = async ({ url }) => {
  try {
    const id = url.searchParams.get("id");
    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    await deleteSkill(Number(id));
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to delete skill" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
