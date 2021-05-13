import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const DropdownExamplePointingTwo = () => (
    <Menu vertical>

        <Dropdown text='Electronic' pointing='left' className='link item'>
            <Dropdown.Menu>
                <Dropdown.Item>dance</Dropdown.Item>
                <Dropdown.Item>breakbeat</Dropdown.Item>
                <Dropdown.Item>chicago-house</Dropdown.Item>
                <Dropdown.Item>club</Dropdown.Item>
                <Dropdown.Item>deep-house</Dropdown.Item>
                <Dropdown.Item>detroit-techno</Dropdown.Item>
                <Dropdown.Item>disco</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>drum-and-bass</Dropdown.Item>
                <Dropdown.Item>edm</Dropdown.Item>
                <Dropdown.Item>electro</Dropdown.Item>
                <Dropdown.Item>post-dubstep</Dropdown.Item>
                <Dropdown.Item>house</Dropdown.Item>
                <Dropdown.Item>techno</Dropdown.Item>
                <Dropdown.Item>trance</Dropdown.Item>
                <Menu.Item>dubstep</Menu.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown text='Rock' pointing='left' className='link item'>
            <Dropdown.Menu>
                <Menu.Item>alternative</Menu.Item>
                <Menu.Item>black-metal</Menu.Item>
                <Menu.Item>british</Menu.Item>
                <Menu.Item>death-metal</Menu.Item>
                <Menu.Item>garage</Menu.Item>
                <Menu.Item>grunge</Menu.Item>
                <Menu.Item>hard-rock</Menu.Item>
                <Menu.Item>hardcore</Menu.Item>
                <Menu.Item>heavy-metal</Menu.Item>
                <Menu.Item>metal</Menu.Item>
                <Dropdown.Divider />
                <Menu.Item>psych-rock</Menu.Item>
                <Menu.Item>punk-rock</Menu.Item>
                <Menu.Item>rockabilly</Menu.Item>
                <Menu.Item>rock-n-roll</Menu.Item>


            </Dropdown.Menu>
        </Dropdown>
        <Dropdown text='famous genre' pointing='left' className='link item'>
            <Dropdown.Menu >
                <Menu.Item></Menu.Item>
                <Menu.Item>folk</Menu.Item>
                <Menu.Item>hip-hop</Menu.Item>
                <Menu.Item>brazil</Menu.Item>
                <Menu.Item>french</Menu.Item>
                <Menu.Item>dub</Menu.Item>

                <Menu.Item>german</Menu.Item>
                <Menu.Item>heavy-metal</Menu.Item>
                <Menu.Item>metal</Menu.Item>
                <Dropdown.Divider />
                <Menu.Item>psych-rock</Menu.Item>
                <Menu.Item>punk-rock</Menu.Item>
                <Menu.Item>rockabilly</Menu.Item>
                <Menu.Item>ro</Menu.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown text='world' pointing='left' className='link item'>
            <Dropdown.Menu >
                <Menu.Item></Menu.Item>
                <Menu.Item>afrobeat</Menu.Item>
                <Menu.Item>bossanova</Menu.Item>
                <Menu.Item>brazil</Menu.Item>
                <Menu.Item>french</Menu.Item>
                <Menu.Item>dub</Menu.Item>

                <Menu.Item>german</Menu.Item>
                <Menu.Item>indian</Menu.Item>
                <Menu.Item>metal</Menu.Item>
                <Dropdown.Divider />
                <Menu.Item>psych-rock</Menu.Item>
                <Menu.Item>punk-rock</Menu.Item>
                <Menu.Item>rockabilly</Menu.Item>
                <Menu.Item>rock-n-roll</Menu.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Pop' pointing='left' className='link item'>
            <Dropdown.Menu >
                <Menu.Item></Menu.Item>
                <Menu.Item>cantopop</Menu.Item>
                <Menu.Item>folk</Menu.Item>
                <Menu.Item>indie</Menu.Item>
                <Menu.Item>indie-pop</Menu.Item>
                <Menu.Item>grunge</Menu.Item>
                <Menu.Item>hard-rock</Menu.Item>
                <Menu.Item>hardcore</Menu.Item>
                <Menu.Item>heavy-metal</Menu.Item>
                <Menu.Item>metal</Menu.Item>
                <Dropdown.Divider />
                <Menu.Item>psych-rock</Menu.Item>
                <Menu.Item>punk-rock</Menu.Item>
                <Menu.Item>rockabilly</Menu.Item>
                <Menu.Item>rock-n-roll</Menu.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown text='Roots' pointing='left' className='link item'>
            <Dropdown.Menu >
                <Menu.Item></Menu.Item>
                <Menu.Item>bluegrass</Menu.Item>
                <Menu.Item>blues</Menu.Item>
                <Menu.Item>country</Menu.Item>
                <Menu.Item>funk</Menu.Item>
                <Menu.Item>honky-tonk</Menu.Item>
                <Menu.Item>hard-rock</Menu.Item>
                <Menu.Item>hardcore</Menu.Item>
                <Menu.Item>heavy-metal</Menu.Item>
                <Menu.Item>metal</Menu.Item>
                <Dropdown.Divider />
                <Menu.Item>psych-rock</Menu.Item>
                <Menu.Item>punk-rock</Menu.Item>
                <Menu.Item>rockabilly</Menu.Item>
                <Menu.Item>rock-n-roll</Menu.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown text='The Other' pointing='left' className='link item'>
            <Dropdown.Menu >
                <Menu.Item></Menu.Item>
                <Menu.Item>disney</Menu.Item>
                <Menu.Item>british</Menu.Item>
                <Menu.Item>death-metal</Menu.Item>
                <Menu.Item>garage</Menu.Item>
                <Menu.Item>grunge</Menu.Item>
                <Menu.Item>hard-rock</Menu.Item>
                <Menu.Item>hardcore</Menu.Item>
                <Menu.Item>heavy-metal</Menu.Item>
                <Menu.Item>metal</Menu.Item>
                <Dropdown.Divider />
                <Menu.Item>psych-rock</Menu.Item>
                <Menu.Item>punk-rock</Menu.Item>
                <Menu.Item>rockabilly</Menu.Item>
                <Menu.Item>rock-n-roll</Menu.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Menu>
)

export default DropdownExamplePointingTwo